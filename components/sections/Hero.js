"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import DecodeText from "@/components/ui/DecodeText";
import MagneticButton from "@/components/ui/MagneticButton";
import { lenisRef } from "@/lib/scrollState";

const NAME_LINES = ["Andrish Reynaldo", "Landau Miranda"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.12, delayChildren: 0.35 },
    },
  };

  const lineVariant = reduceMotion
    ? { hidden: { y: 0 }, show: { y: 0 } }
    : {
        hidden: { y: "110%" },
        show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
      };

  function fade(delay) {
    return {
      initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: reduceMotion ? 0 : delay, duration: reduceMotion ? 0.01 : 0.7, ease: "easeOut" },
    };
  }

  function scrollToWork() {
    lenisRef.current?.scrollTo("#ciberseguridad", { duration: 1.4 });
  }

  return (
    <section id="inicio" className="relative flex min-h-screen w-full flex-col justify-center px-6 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <p className="eyebrow mb-6 text-primary">
          <DecodeText text="// ANDRISH_LANDAU.SYS — EN LÍNEA" delay={250} duration={800} />
        </p>

        <h1 className="font-display font-semibold text-ink">
          <motion.span variants={container} initial="hidden" animate="show" className="block">
            {NAME_LINES.map((l) => (
              <span key={l} className="block overflow-hidden">
                <motion.span
                  variants={lineVariant}
                  className="block text-[clamp(2.75rem,11vw,7.2rem)] leading-[0.98] tracking-tight"
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>

        <motion.p {...fade(1.15)} className="mt-8 max-w-xl text-lg text-ink-dim sm:text-xl">
          Ingeniero de Ciberseguridad, Desarrollador y Especialista en Postproducción Audiovisual.
        </motion.p>

        <motion.div {...fade(1.35)} className="mt-12 flex flex-wrap items-center gap-4">
          <MagneticButton
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-void"
          >
            Ver trabajo
            <ArrowDown size={16} />
          </MagneticButton>
          <MagneticButton
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-dim"
          >
            Contacto
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
