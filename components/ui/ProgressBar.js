"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toneOf } from "@/lib/tone";
import { prefersReducedMotion } from "@/lib/prefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function ProgressBar({ label, value, tone = "primary" }) {
  const fillRef = useRef(null);
  const t = toneOf(tone);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(el, { width: `${value}%` });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: `${value}%`,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [value]);

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="text-sm text-ink-dim">{label}</span>
        <span className="eyebrow tabular shrink-0 text-ink-faint">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <div ref={fillRef} className={`h-full rounded-full ${t.bg}`} style={{ width: 0 }} />
      </div>
    </div>
  );
}
