// La media query en globals.css ya neutraliza transiciones/animaciones CSS,
// pero GSAP y el efecto decode animan por JS y no la "ven". Los componentes
// que las usan consultan esto antes de animar.
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
