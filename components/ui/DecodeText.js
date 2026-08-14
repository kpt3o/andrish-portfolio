"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/prefersReducedMotion";

const CHARS = "01_/\\#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Efecto "decode": el texto real se renderiza en el HTML inicial
 * (accesible, sin parpadeo para lectores de pantalla) y sólo tras
 * montar el componente se anima desde caracteres aleatorios hacia
 * el texto definitivo. Eco directo del glitch-text del sitio de
 * referencia, traducido al lenguaje de ciberseguridad de Andrish.
 */
export default function DecodeText({ text, className = "", duration = 700, delay = 0 }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(text);
      return undefined;
    }

    let frame;
    let start;

    const timeout = setTimeout(() => {
      function tick(now) {
        if (start === undefined) start = now;
        const progress = Math.min((now - start) / duration, 1);
        const revealCount = Math.floor(progress * text.length);

        let next = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] === " ") next += " ";
          else if (i < revealCount) next += text[i];
          else next += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        setDisplay(next);

        if (progress < 1) frame = requestAnimationFrame(tick);
        else setDisplay(text);
      }
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [text, duration, delay]);

  return <span className={className}>{display}</span>;
}
