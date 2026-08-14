// Tailwind escanea el código fuente en busca de nombres de clase LITERALES.
// Si construyéramos algo como `text-${tone}` en tiempo de ejecución, esa
// clase nunca aparecería como texto en el archivo y Tailwind jamás
// generaría el CSS correspondiente. Por eso cada variante vive aquí,
// escrita de forma completa, y los componentes sólo eligen entre ellas.

export const TONE = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    bgSoft: "bg-primary/10",
    border: "border-primary",
    borderSoft: "border-primary/30",
    ring: "focus-visible:outline-primary",
  },
  edit: {
    text: "text-edit",
    bg: "bg-edit",
    bgSoft: "bg-edit/10",
    border: "border-edit",
    borderSoft: "border-edit/30",
    ring: "focus-visible:outline-edit",
  },
  dev: {
    text: "text-dev",
    bg: "bg-dev",
    bgSoft: "bg-dev/10",
    border: "border-dev",
    borderSoft: "border-dev/30",
    ring: "focus-visible:outline-dev",
  },
};

export function toneOf(key) {
  return TONE[key] ?? TONE.primary;
}
