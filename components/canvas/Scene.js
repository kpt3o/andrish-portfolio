"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SceneContent from "./SceneContent";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 55, near: 0.1, far: 200 }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
