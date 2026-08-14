# Andrish Landau — Portafolio 

Experiencia interactiva de scrollytelling de una sola página, diseñada con un fondo 3D procedural que reacciona a la navegación. Este proyecto centraliza mi perfil profesional a través de tres disciplinas clave: Ciberseguridad, Edición/Postproducción y Desarrollo de Software.

## Stack Tecnológico

El proyecto está construido con un enfoque en rendimiento y renderizado avanzado en el navegador:
*   **Framework:** Next.js (App Router)
*   **Estilos:** Tailwind CSS v4
*   **Animación y Scroll:** Lenis, GSAP, ScrollTrigger y Framer Motion
*   **Entorno 3D:** React Three Fiber + drei

## Puesta en marcha

Para correr este proyecto en un entorno local, requieres Node.js 20.9 o superior.

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev      # Disponible en http://localhost:3000

npm run build    # Compila el build de producción optimizado
npm run start    # Sirve el build de producción


Arquitectura del Proyecto


app/
  layout.js          # Metadata, inyección de Google Fonts y globals.css
  page.js            # Ensamblaje del fondo 3D, navegación y las secciones
  globals.css        # Sistema de diseño y variables (Tailwind v4 @theme)
components/
  canvas/            # Escena 3D (Cámara, iluminación, clústeres procedurales)
  layout/            # SmoothScroll (Lenis+GSAP) y barra de navegación
  sections/          # Componentes modulares para cada disciplina (Hero, Info, Herramientas)
  ui/                # Piezas de interfaz reutilizables (Botones magnéticos, etiquetas, reveal)
lib/
  sections.js        # Configuración central de navegación, colores y posiciones de cámara 3D
  scrollState.js     # Progreso de scroll compartido
  tone.js            # Mapeo de clases de Tailwind por color semántico