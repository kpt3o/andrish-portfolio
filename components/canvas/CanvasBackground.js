"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

// position:fixed a nivel raíz, fuera de cualquier ancestro con transform,
// para que se mantenga fijo mientras Lenis desplaza el contenido normal.
export default function CanvasBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <Scene />
    </div>
  );
}
