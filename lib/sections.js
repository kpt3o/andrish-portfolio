// Fuente única de verdad para las 6 etapas del recorrido.
// La usan la navegación, el fondo 3D y las cabeceras de sección,
// para que el color y la posición de cámara nunca se desincronicen.

export const SECTIONS = [
  {
    id: "inicio",
    index: "00",
    nav: "Inicio",
    accent: "primary",
    cameraZ: 6,
    instrument: "origin",
  },
  {
    id: "ciberseguridad",
    index: "01",
    nav: "Ciberseguridad",
    accent: "primary",
    cameraZ: -10,
    instrument: "lattice",
  },
  {
    id: "edicion",
    index: "02",
    nav: "Edición",
    accent: "edit",
    cameraZ: -30,
    instrument: "ring",
  },
  {
    id: "desarrollo",
    index: "03",
    nav: "Desarrollo",
    accent: "dev",
    cameraZ: -50,
    instrument: "grid",
  },
  {
    id: "sobre-mi",
    index: "04",
    nav: "Sobre mí",
    accent: "primary",
    cameraZ: -66,
    instrument: "origin",
  },
  {
    id: "contacto",
    index: "05",
    nav: "Contacto",
    accent: "primary",
    cameraZ: -82,
    instrument: "origin",
  },
];

// Debe reflejar los valores definidos como @theme en app/globals.css
export const ACCENT_HEX = {
  primary: "#63d9f2",
  edit: "#f2a65a",
  dev: "#9c8cff",
};

export function accentOf(id) {
  return SECTIONS.find((s) => s.id === id)?.accent ?? "primary";
}
