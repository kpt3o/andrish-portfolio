"use client";

import { useMemo } from "react";
import { Stars, Line } from "@react-three/drei";
import CameraRig from "./CameraRig";
import NodeCluster from "./NodeCluster";
import { SECTIONS, ACCENT_HEX } from "@/lib/sections";

// Debe coincidir con --color-void en app/globals.css
const VOID = "#05070b";

export default function SceneContent() {
  const nodes = useMemo(
    () =>
      SECTIONS.map((s) => ({
        ...s,
        position: [
          Math.sin(s.cameraZ * 0.15) * 1.2,
          Math.cos(s.cameraZ * 0.11) * 0.5,
          s.cameraZ - 4,
        ],
      })),
    []
  );

  const trail = useMemo(() => nodes.map((n) => n.position), [nodes]);

  return (
    <>
      <color attach="background" args={[VOID]} />
      <fog attach="fog" args={[VOID, 15, 95]} />
      <ambientLight intensity={0.45} />
      <pointLight position={[0, 2, 8]} intensity={0.8} />

      <CameraRig />

      <Stars radius={80} depth={50} count={2200} factor={2.4} fade speed={0.4} />

      <Line points={trail} color={ACCENT_HEX.primary} lineWidth={0.6} transparent opacity={0.12} />

      {nodes.map((n) => (
        <NodeCluster key={n.id} type={n.instrument} position={n.position} color={ACCENT_HEX[n.accent]} />
      ))}
    </>
  );
}
