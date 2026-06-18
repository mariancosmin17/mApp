"use client";
import { useRef, useEffect, useCallback } from 'react';
import styles from './GalleryMarquee.module.css';

export function GalleryMarquee({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const autoRef = useRef(true);
  const rafRef = useRef<number>(0);
  const momentumRafRef = useRef<number>(0);
  const resumeRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const speedRef = useRef(0.8);

  const pause = useCallback(() => {
    autoRef.current = false;
    clearTimeout(resumeRef.current);
  }, []);

  const resume = useCallback((delay = 800) => {
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => { autoRef.current = true; }, delay);
  }, []);

  // Detect touch device and bump speed
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    speedRef.current = isTouchDevice ? 1.3 : 0.8;
  }, []);

  // Auto-scroll via rAF — uses transform, not scrollLeft (works on iOS Safari)
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const tick = () => {
      if (autoRef.current) {
        const half = wrap.scrollWidth / 2;
        if (half > 0) {
          offsetRef.current += speedRef.current;
          if (offsetRef.current >= half) offsetRef.current -= half;
          wrap.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, []);

  // Touch swipe with momentum
  useEffect(() => {
    const root = rootRef.current;
    const wrap = wrapRef.current;
    if (!root || !wrap) return;

    let startX = 0, startY = 0, startOffset = 0;
    let isHorizontal: boolean | null = null;
    let lastX = 0, lastTime = 0, velocity = 0;

    const applyOffset = (next: number) => {
      const half = wrap.scrollWidth / 2;
      if (next >= half) next -= half;
      if (next < 0) next += half;
      offsetRef.current = next;
      wrap.style.transform = `translateX(-${next}px)`;
    };

    const onTouchStart = (e: TouchEvent) => {
      cancelAnimationFrame(momentumRafRef.current);
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startOffset = offsetRef.current;
      isHorizontal = null;
      lastX = startX;
      lastTime = Date.now();
      velocity = 0;
      pause();
    };

    const onTouchMove = (e: TouchEvent) => {
      const dx = startX - e.touches[0].clientX;
      const dy = startY - e.touches[0].clientY;

      if (isHorizontal === null) {
        isHorizontal = Math.abs(dx) > Math.abs(dy);
      }
      if (!isHorizontal) return;

      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) velocity = (lastX - e.touches[0].clientX) / dt;
      lastX = e.touches[0].clientX;
      lastTime = now;

      applyOffset(startOffset + dx);
    };

    const onTouchEnd = () => {
      // Momentum: amplify and decelerate
      let vel = velocity * 18;

      const momentum = () => {
        vel *= 0.90;
        if (Math.abs(vel) < 0.15) {
          resume(500);
          return;
        }
        applyOffset(offsetRef.current + vel);
        momentumRafRef.current = requestAnimationFrame(momentum);
      };

      momentumRafRef.current = requestAnimationFrame(momentum);
    };

    root.addEventListener('touchstart', onTouchStart, { passive: true });
    root.addEventListener('touchmove', onTouchMove, { passive: true });
    root.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      root.removeEventListener('touchstart', onTouchStart);
      root.removeEventListener('touchmove', onTouchMove);
      root.removeEventListener('touchend', onTouchEnd);
    };
  }, [pause, resume]);

  // Mouse drag
  useEffect(() => {
    const root = rootRef.current;
    const wrap = wrapRef.current;
    if (!root || !wrap) return;

    let startX = 0, startOffset = 0, dragging = false;

    const applyOffset = (next: number) => {
      const half = wrap.scrollWidth / 2;
      if (next >= half) next -= half;
      if (next < 0) next += half;
      offsetRef.current = next;
      wrap.style.transform = `translateX(-${next}px)`;
    };

    const onDown = (e: MouseEvent) => {
      dragging = true;
      startX = e.pageX;
      startOffset = offsetRef.current;
      pause();
      root.style.cursor = 'grabbing';
    };

    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      e.preventDefault();
      applyOffset(startOffset + (startX - e.pageX));
    };

    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      root.style.cursor = '';
      resume();
    };

    const onEnter = () => pause();
    const onLeave = () => resume(300);

    root.addEventListener('mousedown', onDown);
    root.addEventListener('mouseenter', onEnter);
    root.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    return () => {
      root.removeEventListener('mousedown', onDown);
      root.removeEventListener('mouseenter', onEnter);
      root.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [pause, resume]);

  return (
    <div ref={rootRef} className={styles.root}>
      <div ref={wrapRef} className={styles.wrap}>
        <div className={styles.track}>{children}</div>
        <div className={styles.track} aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

export default GalleryMarquee;
