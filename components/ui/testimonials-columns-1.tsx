"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
  dark?: boolean;
}) => {
  const { dark = false } = props;
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-slate-200 shadow-md shadow-blue-600/5 max-w-xs w-full bg-white"
                key={i}
              >
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <div className="text-slate-700 text-sm leading-relaxed">{text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-slate-800 text-sm leading-5">{name}</div>
                    <div className="text-sm leading-5 text-slate-500">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};

export const testimonials = [
  {
    text: "Am comandat 10 tone de balast și livrarea a fost făcută a doua zi. Prețuri corecte, șofer punctual. Recomand cu încredere!",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Alexandru M.",
    role: "Client — Construcție casă, Târgu Neamț",
  },
  {
    text: "Am închiriat nacela pentru lucrări la acoperiș. Utilajul era în stare perfectă și operatorul știa exact ce face. Colaborare excelentă.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Gheorghe P.",
    role: "Client — Lucrări la înălțime, Bicaz",
  },
  {
    text: "Au efectuat săpăturile pentru fundația casei în 2 zile. Rapid, curat, fără nicio problemă. Îi voi contacta și la viitoarele proiecte.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Maria D.",
    role: "Client — Terasament fundație, Piatra Neamț",
  },
  {
    text: "Servicii de transport agregate la cel mai înalt nivel. Au livrat pietriș și nisip direct la șantier. Totul la timp, prețuri rezonabile.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Ion C.",
    role: "Constructor independent, Roman",
  },
  {
    text: "Am folosit miniexcavatorul pentru săpături într-un spațiu restrâns. Operatorul a fost profesionist și a rezolvat totul în câteva ore.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Mihai T.",
    role: "Client — Fundație garaj, Roznov",
  },
  {
    text: "Recomand MASERCOM cu toată încrederea. Basculanta cu macara a rezolvat problema descărcării în curtea îngustă, fără niciun incident.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    name: "Elena V.",
    role: "Client — Renovare curte, Negrești",
  },
  {
    text: "Echipă serioasă și punctuală. Au adus piatră spartă de două ori în aceeași săptămână, exact când aveam nevoie pentru lucrare.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Vasile R.",
    role: "Antreprenor, Târgu Neamț",
  },
  {
    text: "Buldoexcavatorul a nivelat terenul perfect. Rapiditate și precizie remarcabile. Voi colabora din nou la următorul proiect.",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    name: "Andreea N.",
    role: "Client — Amenajare teren, Bălțătești",
  },
  {
    text: "Prețuri corecte, utilaje bine întreținute, oameni de cuvânt. Exact ce aveam nevoie pentru șantierul nostru din județ.",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
    name: "Florin B.",
    role: "Manager șantier, Piatra Neamț",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = ({ dark = false }: { dark?: boolean }) => {
  return (
    <section className={`${dark ? 'bg-[#0c1220]' : 'bg-slate-50'} pt-16 pb-16 relative overflow-hidden`}>
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="section-header"
          style={{ marginBottom: '2rem', marginTop: '3rem' }}
        >
          <h2 style={dark ? { color: 'var(--color-white)' } : {}}>Ce spun clienții</h2>
          <p style={dark ? { color: 'rgba(255,255,255,0.6)' } : {}}>Sute de clienți mulțumiți din Târgu Neamț și județul Neamț.</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-2 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} dark={dark} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} dark={dark} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} dark={dark} />
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
