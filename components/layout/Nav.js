"use client";

import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { scrollState, lenisRef } from "@/lib/scrollState";
import { toneOf } from "@/lib/tone";

export default function Nav() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [open, setOpen] = useState(false);
  const barRef = useRef(null);

  // Progreso continuo -> barra superior, leído por rAF para no re-renderizar
  // React en cada tick de scroll.
  useEffect(() => {
    let raf;
    function loop() {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${scrollState.progress})`;
      }
      raf = requestAnimationFrame(loop);
    }
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Sección activa: cambia poco, así que sí vive en React state.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function goTo(id) {
    setOpen(false);
    lenisRef.current?.scrollTo(`#${id}`, { offset: 0, duration: 1.4 });
  }

  const tone = toneOf(SECTIONS.find((s) => s.id === active)?.accent ?? "primary");

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-px bg-line">
        <div
          ref={barRef}
          className={`h-full origin-left transition-colors duration-500 ${tone.bg}`}
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 sm:px-10">
        <button
          type="button"
          onClick={() => goTo("inicio")}
          className="font-display text-sm font-semibold tracking-wide text-ink"
        >
          ANDRISH<span className={`transition-colors duration-500 ${tone.text}`}>.</span>LANDAU
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-void/60 px-2 py-2 backdrop-blur-sm md:flex">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(s.id)}
              className={`eyebrow rounded-full px-3.5 py-1.5 transition-colors ${
                active === s.id ? "text-ink" : "text-ink-faint hover:text-ink-dim"
              }`}
            >
              {s.nav}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="eyebrow rounded-full border border-line px-4 py-2 text-ink-dim md:hidden"
          aria-expanded={open}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </header>

      {open ? (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-7 bg-void/95 backdrop-blur-sm md:hidden">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(s.id)}
              className="font-display text-3xl text-ink"
            >
              {s.nav}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
