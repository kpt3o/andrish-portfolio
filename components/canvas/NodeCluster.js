"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

// --- Ciberseguridad: núcleo cristalino con nodos orbitando (paquetes/red) ---
function Lattice({ color }) {
  const group = useRef(null);
  const orbitRefs = useRef([]);

  const orbits = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        radius: 1.5 + (i % 3) * 0.32,
        speed: 0.16 + i * 0.045,
        offset: (i / 5) * Math.PI * 2,
      })),
    []
  );

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.08;
    const t = state.clock.elapsedTime;
    orbits.forEach((o, i) => {
      const mesh = orbitRefs.current[i];
      if (!mesh) return;
      const a = t * o.speed + o.offset;
      mesh.position.set(
        Math.cos(a) * o.radius,
        Math.sin(a * 0.7) * o.radius * 0.4,
        Math.sin(a) * o.radius
      );
    });
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={0.38}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      {orbits.map((_, i) => (
        <mesh key={i} ref={(el) => (orbitRefs.current[i] = el)}>
          <octahedronGeometry args={[0.11, 0]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

// --- Edición: anillo/lente girando, con partículas tipo grano de película ---
function Ring({ color }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.x += delta * 0.1;
    group.current.rotation.y += delta * 0.065;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusGeometry args={[1.25, 0.045, 8, 64]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
      </mesh>
      <mesh>
        <ringGeometry args={[0.5, 0.58, 48]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Sparkles count={45} scale={3.2} size={2} speed={0.25} color={color} opacity={0.5} />
    </group>
  );
}

// --- Desarrollo: retícula de módulos, como un rack o placa de circuitos ---
function Grid({ color }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.05;
  });

  const cells = useMemo(() => {
    const arr = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        arr.push([x * 0.72, y * 0.72, 0]);
      }
    }
    return arr;
  }, []);

  return (
    <group ref={group}>
      {cells.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.46, 0.46, 0.46]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
        </mesh>
      ))}
      <mesh>
        <boxGeometry args={[2.5, 2.5, 0.1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

// --- Identidad: núcleo simple, para inicio / sobre mí / contacto ---
function Origin({ color }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
      </mesh>
      <mesh scale={0.34}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

const TYPES = { lattice: Lattice, ring: Ring, grid: Grid, origin: Origin };

export default function NodeCluster({ type = "origin", position = [0, 0, 0], color = "#63d9f2" }) {
  const Cmp = TYPES[type] ?? Origin;
  return (
    <group position={position}>
      <Cmp color={color} />
    </group>
  );
}
