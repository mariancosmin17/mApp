"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/animated-shiny-text";

const phone = process.env.NEXT_PUBLIC_PHONE ?? "0756523427";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Rapid", "Sigur", "Profesional", "Precis", "De Calitate"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/background.png"
        alt="MASERCOM — Utilaje de construcții"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-[#0c1220]/68 z-[1]" />

      <div className="relative z-[2] w-full">
        <div className="container mx-auto px-6">
          <div className="flex gap-6 py-32 lg:py-44 items-center justify-center flex-col">
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 bg-white/5 backdrop-blur-sm"
              >
                Solicită o ofertă gratuită <MoveRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex gap-3 flex-col items-center">
              <AnimatedText
                text="MASERCOM"
                className="py-0"
                hoverEffect
              />

              <div className="relative flex w-full justify-center overflow-hidden text-center h-14 md:h-20">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute text-2xl md:text-4xl font-semibold text-blue-300 tracking-wider uppercase"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -80 : 80,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </div>

              <p className="text-base md:text-xl leading-relaxed tracking-tight text-white/55 max-w-xl text-center mt-2">
                Fundații solide pentru proiecte mari. Transport agregate, închiriere utilaje
                și lucrări de excavații în Târgu Neamț și județul Neamț.
              </p>
            </div>

            <div className="flex flex-row gap-3 flex-wrap justify-center mt-2">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 h-11 px-8 rounded-md border border-white/30 bg-white/8 text-white font-medium text-sm hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4" /> Sună acum
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 h-11 px-8 rounded-md bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30"
              >
                Solicită ofertă <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1 text-white/30 text-xs animate-bounce">
        <span>Scroll</span>
        <span>↓</span>
      </div>
    </section>
  );
}

export { Hero };
