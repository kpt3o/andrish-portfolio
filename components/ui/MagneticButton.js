"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MotionA = motion.a;
const MotionButton = motion.button;

/**
 * CTA que "sigue" ligeramente al cursor dentro de sus límites.
 * Framer Motion se encarga de esto (hover/interacción), nunca del scroll.
 */
export default function MagneticButton({
  children,
  className = "",
  href,
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const shared = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    animate: { x: pos.x, y: pos.y },
    whileTap: { scale: 0.94 },
    transition: { type: "spring", stiffness: 150, damping: 12, mass: 0.3 },
    className,
    ...rest,
  };

  if (href) {
    return (
      <MotionA href={href} {...shared}>
        {children}
      </MotionA>
    );
  }

  return <MotionButton type="button" {...shared}>{children}</MotionButton>;
}
