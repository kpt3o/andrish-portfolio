"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { scrollState } from "@/lib/scrollState";
import { SECTIONS } from "@/lib/sections";
import { prefersReducedMotion } from "@/lib/prefersReducedMotion";

const WAYPOINTS = SECTIONS.map((s) => s.cameraZ);

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Interpolación lineal por tramos: reparte el progreso 0->1 entre los
// N-1 segmentos definidos por los waypoints de cada sección.
function pathZ(progress) {
  const n = WAYPOINTS.length - 1;
  const t = Math.min(Math.max(progress, 0), 1) * n;
  const i = Math.min(Math.floor(t), n - 1);
  return lerp(WAYPOINTS[i], WAYPOINTS[i + 1], t - i);
}

/** No renderiza nada: sólo mueve la cámara en cada frame. */
export default function CameraRig() {
  const eased = useRef({ x: 0, y: 0, z: WAYPOINTS[0] });
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = prefersReducedMotion();
  }, []);

  useFrame((state, delta) => {
    const targetZ = pathZ(scrollState.progress);
    // Suavizado independiente del framerate (evita saltos en pantallas de 120Hz).
    const t = 1 - Math.pow(0.001, delta);

    // El desplazamiento en Z sigue al scroll (es funcional). El drift
    // autónomo y el parallax del cursor son puramente decorativos, así
    // que se anulan con prefers-reduced-motion.
    const motionScale = reduceMotion.current ? 0 : 1;
    const drift = Math.sin(scrollState.progress * Math.PI * 3) * 0.55 * motionScale;
    const pointerX = state.pointer.x * 0.45 * motionScale;
    const pointerY = state.pointer.y * 0.25 * motionScale;

    const e = eased.current;
    e.z = lerp(e.z, targetZ, t);
    e.x = lerp(e.x, drift + pointerX, t);
    e.y = lerp(e.y, pointerY, t);

    state.camera.position.set(e.x, e.y, e.z);
    state.camera.lookAt(e.x * 0.6, e.y * 0.6, e.z - 12);
  });

  return null;
}
