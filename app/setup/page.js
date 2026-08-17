import Link from "next/link";
import { ArrowLeft, MonitorPlay, ExternalLink, Play } from "lucide-react";

export const metadata = {
  title: "Setup & Herramientas | Andrish",
  description: "El hardware, software y ecosistema de trabajo detrás de mis proyectos.",
};

// Aquí configuraremos los videos que mostrarás. 
// Por ahora usaré colores de fondo, luego los cambiarás por imágenes reales.
const PORTFOLIO_ITEMS = [
  {
    title: "Edición Viral Short-Form",
    tech: "Premiere Pro + After Effects",
    size: "row-span-2", // Hace la tarjeta más alta (estilo vertical/Reel)
    bg: "bg-zinc-800",
  },
  {
    title: "Podcast Long-Form",
    tech: "DaVinci Resolve (Color Log)",
    size: "row-span-1", // Tarjeta normal
    bg: "bg-zinc-900",
  },
  {
    title: "Cobertura de Evento",
    tech: "Sony Vegas (Mis Inicios)",
    size: "row-span-1", // Tarjeta normal
    bg: "bg-zinc-800",
  },
  {
    title: "Reel Comercial / Producto",
    tech: "CapCut + Premiere",
    size: "col-span-1 md:col-span-2 row-span-1", // Tarjeta ancha (estilo horizontal/YouTube)
    bg: "bg-zinc-900",
  },
];

const DRIVE_LINK = "https://drive.google.com/drive/folders/1S3yG7X2Hp5FcxQWheMbsboujDc9h-yme?usp=drive_link";

export default function SetupPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-ink selection:bg-dev/30 selection:text-dev px-6 py-24 sm:px-10 relative z-10">
      <div className="mx-auto max-w-5xl space-y-20">
        
        {/* Cabecera y Botón de Regreso */}
        <header className="space-y-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-ink-faint hover:text-dev transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-display font-medium text-ink mb-4">
                Mi Ecosistema.
              </h1>
              <p className="text-lg text-ink-dim leading-relaxed max-w-2xl">
                Un desglose completo del software que utilizo, el hardware que ensamblo y los espacios donde alojo mi trabajo en producción. Todo lo necesario para operar en ciberseguridad, desarrollo y medios audiovisuales.
              </p>
            </div>
            
            {/* Botón Global de Drive */}
            <a 
              href={DRIVE_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-surface/50 border border-line px-5 py-3 text-sm font-medium hover:bg-dev hover:text-[#05070b] hover:border-dev transition-all shrink-0"
            >
              <ExternalLink size={16} />
              Ver Bóveda en Drive
            </a>
          </div>
        </header>

        {/* Sección de Galería Estilo GSAP */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-line/50 pb-4">
            <div className="flex items-center gap-3">
              <MonitorPlay className="text-dev" size={24} />
              <h2 className="text-2xl font-display font-medium text-ink">
                Portafolio Audiovisual
              </h2>
            </div>
            <div className="hidden sm:flex flex-wrap gap-2">
                {["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut"].map((tool) => (
                  <span key={tool} className="rounded-full bg-surface px-3 py-1 text-xs text-ink-faint border border-line/50">
                    {tool}
                  </span>
                ))}
            </div>
          </div>

          {/* Grid de Galería Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <a 
                key={i}
                href={DRIVE_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl ${item.bg} ${item.size} border border-line/30 transition-all hover:border-dev/50`}
              >
                {/* 
                  AQUÍ PONDRÁS TUS IMÁGENES EN EL FUTURO:
                  <img src="/tu-imagen.jpg" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} /> 
                */}
                
                {/* Fondo de relleno mientras pones imágenes (puedes borrarlo luego) */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-surface/20"></div>

                {/* Gradiente Oscuro para que el texto sea legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Ícono de Play centrado que aparece al hacer hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                  <div className="rounded-full bg-dev/20 p-4 backdrop-blur-sm border border-dev/30 text-dev">
                    <Play size={32} className="ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Contenido de Texto (Aparece deslizando hacia arriba) */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-xl font-display font-medium text-white mb-1 group-hover:text-dev transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm font-mono text-ink-faint opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.tech}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}