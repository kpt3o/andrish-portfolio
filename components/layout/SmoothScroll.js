"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollState, lenisRef } from "@/lib/scrollState";

gsap.registerPlugin(ScrollTrigger);

/**
 * Motor de scroll de toda la experiencia.
 * - Lenis suaviza el scroll nativo (sin envolver el contenido en un
 *   wrapper con transform, por eso el <canvas> de fondo puede ser
 *   position:fixed sin romperse).
 * - GSAP.ticker es quien "empuja" cada frame de Lenis, para que Lenis
 *   y ScrollTrigger vivan en el mismo reloj y no se desincronicen.
 * - scrollState guarda el progreso en un objeto mutable que la escena
 *   3D lee en cada useFrame, sin pasar por React state.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.15,
      anchors: true,
    });
    lenisRef.current = lenis;

    const unsubscribe = lenis.on("scroll", (l) => {
      scrollState.progress = l.progress;
      scrollState.velocity = l.velocity;
    });
    lenis.on("scroll", ScrollTrigger.update);

    function onTick(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(refreshTimeout);
      gsap.ticker.remove(onTick);
      unsubscribe();
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return children;
}
