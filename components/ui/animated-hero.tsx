"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/animated-shiny-text";
import styles from "./animated-hero.module.css";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Rapid", "Sigur", "Profesional", "Precis", "De Calitate"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/background.png"
        alt="MASERCOM — Utilaje de construcții"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#080d18]/72 z-[1]" />

      {/* Film grain texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.032,
        }}
      />

      {/* Bottom vignette — fades to white for smooth transition to next section */}
      <div
        aria-hidden="true"
        className={`absolute bottom-0 left-0 right-0 z-[3] pointer-events-none ${styles.fadeVignette}`}
      />

      {/* Content */}
      <div className="relative z-[4] w-full">
        <div className="container mx-auto px-6">
          <div className="flex gap-0 pt-24 pb-28 lg:pt-28 lg:pb-36 items-center justify-center flex-col">

            {/* Top label */}
            <p
              className="text-white/35 text-xs font-medium tracking-[0.25em] uppercase mb-10"
              style={{ letterSpacing: "0.25em" }}
            >
              Târgu Neamț &nbsp;·&nbsp; Județul Neamț
            </p>

            {/* MASERCOM — shiny animated */}
            <AnimatedText text="MASERCOM" className={`py-0 ${styles.heroTitleWrapper}`} />

            {/* Thin divider */}
            <div className="w-24 h-px bg-white/15 my-5" />

            {/* Cycling words */}
            <div className="relative flex justify-center overflow-hidden h-12 md:h-16 w-full">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute text-xl md:text-3xl font-semibold text-blue-300/90 tracking-[0.18em] uppercase"
                  initial={{ opacity: 0, y: -60 }}
                  transition={{ type: "spring", stiffness: 45, damping: 14 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -60 : 60, opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-sm md:text-base text-white/45 max-w-sm text-center mt-7 leading-relaxed tracking-wide">
              Fundații solide pentru proiecte mari.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export { Hero };
