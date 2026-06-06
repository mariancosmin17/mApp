"use client";
import { useRef, useEffect, useCallback } from 'react';
import styles from './GalleryMarquee.module.css';

export function GalleryMarquee({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef(true);
  const rafRef = useRef<number>(0);
  const resumeRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const pause = useCallback(() => {
    autoRef.current = false;
    clearTimeout(resumeRef.current);
  }, []);

  const resume = useCallback((delay = 800) => {
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => {
      autoRef.current = true;
    }, delay);
  }, []);

  // Auto-scroll via rAF
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const tick = () => {
      if (autoRef.current) {
        el.scrollLeft += 0.8;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, []);

  // Mouse drag
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let startX = 0, startScroll = 0, dragging = false;

    const onDown = (e: MouseEvent) => {
      dragging = true;
      startX = e.pageX;
      startScroll = el.scrollLeft;
      pause();
      el.style.cursor = 'grabbing';
    };

    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      e.preventDefault();
      const half = el.scrollWidth / 2;
      let next = startScroll - (e.pageX - startX);
      if (next >= half) next -= half;
      if (next < 0) next += half;
      el.scrollLeft = next;
    };

    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      el.style.cursor = '';
      resume();
    };

    // Hover pause
    const onEnter = () => pause();
    const onLeave = () => resume(300);

    // Touch: native scroll handles the swipe, just pause/resume auto-scroll
    const onTouchStart = () => pause();
    const onTouchEnd = () => resume(1200);

    el.addEventListener('mousedown', onDown);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    return () => {
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [pause, resume]);

  return (
    <div ref={rootRef} className={styles.root}>
      <div className={styles.track}>{children}</div>
      <div className={styles.track} aria-hidden="true">{children}</div>
    </div>
  );
}

export default GalleryMarquee;
