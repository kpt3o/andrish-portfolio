# Andrish Landau Miranda — Portafolio

Experiencia scrollytelling de una sola página, con un fondo 3D procedural que
reacciona al scroll. Construida con Next.js (App Router), Tailwind CSS v4,
Lenis, GSAP/ScrollTrigger, React Three Fiber + drei, y Framer Motion.

## Puesta en marcha

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev       # http://localhost:3000
```

Otros comandos:

```bash
npm run build     # build de producción
npm run start     # sirve el build de producción
```

No hay pasos adicionales: las fuentes se cargan desde Google Fonts vía
`<link>` en `app/layout.js`, así que sólo necesitas conexión a internet la
primera vez que cargues la página en el navegador.

## Antes de publicar — reemplaza estos placeholders

- **`components/sections/Contact.js`** — las URLs de GitHub y LinkedIn, y el
  correo (`mailto:`), son de ejemplo. Cámbialas por las tuyas.
- **`components/sections/Postproduction.js`** — las cifras del caso "Winnie
  Suku" (48h, +2×) son ilustrativas; reemplázalas con tus resultados reales.
- **`components/sections/Cybersecurity.js`** — los porcentajes de "Andrish
  Cyber Lab" (82%, 68%) son de ejemplo.
- Si tienes un demo reel real, sustituye el placeholder estilizado en
  `Postproduction.js` por tu `<video>` o embed.

## Estructura

```
app/
  layout.js          Metadata + fuentes (Google Fonts) + globals.css
  page.js             Ensambla fondo 3D, scroll, nav y las 6 secciones
  globals.css         Sistema de diseño (Tailwind v4 @theme)
components/
  canvas/             Escena 3D (Canvas, cámara, clusters procedurales)
  layout/             SmoothScroll (Lenis+GSAP) y Nav
  sections/           Las 6 secciones del recorrido
  ui/                 Piezas reutilizables (Reveal, Tag, MagneticButton...)
lib/
  sections.js         Única fuente de verdad: nav + color + cámara 3D
  scrollState.js      Progreso de scroll compartido (objeto mutable)
  tone.js             Mapa de clases Tailwind por color semántico
```

## Sistema de diseño

**Investigué `noth.in`** (el estudio "Nothin'", de París) antes de construir:
no es un portafolio 3D — es un sitio editorial en Webflow, con fotografía de
objetos brillantes/surrealistas y un efecto de texto tipo glitch/decode. De
ahí tomé prestada la **confianza tipográfica**, el **ritmo del scroll** y,
sobre todo, el **efecto de "decodificación"** (visible en el eyebrow del
hero) — traducido al lenguaje de ciberseguridad de Andrish. El espacio 3D en
sí es una construcción original, hecha con el stack que pediste.

**Color** — grafito-azulado espacial (`#05070b`), no negro neutro. Un acento
primario cian (`#63d9f2`) hace doble función: es el color interactivo de
todo el sitio (nav, enlaces, foco) y la identidad de Ciberseguridad, su
disciplina principal. Edición usa ámbar (`#f2a65a`) y Desarrollo usa violeta
(`#9c8cff`) — cada uno aparece sólo dentro de su propia sección, así el
scroll se siente como cambiar de "modo".

**Tipografía** — tres roles distintos: **Space Grotesk** (titulares),
**Instrument Sans** (cuerpo de texto) y **JetBrains Mono** (etiquetas, datos,
el spec-sheet de hardware). Nada de Inter/Roboto.

**La escena 3D** — no es un fondo de partículas genérico: es un recorrido.
La cámara viaja por un eje mientras 3 "instrumentos" con wireframe marcan
cada disciplina — un núcleo cristalino con nodos orbitando (ciberseguridad),
un anillo/lente girando con partículas tipo grano de película (edición), y
una retícula de módulos tipo placa de circuitos (desarrollo) — conectados
por una línea de trayectoria tenue. `dpr` limitado a `[1, 2]` y todo hecho
con geometría de Three.js, sin cargar ningún `.glb`/`.gltf`.

## Decisiones y desviaciones del stack pedido

- **JavaScript, no TypeScript** — no se especificó, y para un proyecto de
  este tamaño prioricé velocidad de iteración sobre tipado estricto. Migrar
  a `.tsx` después es sencillo si lo prefieres.
- **`lenis` en vez de `@studio-freight/lenis`** — el paquete con scope fue
  renombrado (Studio Freight se convirtió en Darkroom Engineering); `npm`
  marca `@studio-freight/lenis` como deprecado y redirige a `lenis`.
- **Fuentes vía `<link>`, no `next/font/google`** — evita una dependencia de
  red en tiempo de build y es igual de válido; si prefieres el
  auto-hosting de `next/font`, es un cambio de pocas líneas en
  `app/layout.js`.
- Verifiqué versiones y compatibilidad de peer dependencies (React 19 +
  Next 16 + R3F 9 + drei 10) contra el registro de npm antes de fijar las
  versiones en `package.json`, y corrí `next build` real para confirmar que
  compila sin errores.
