import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import { ExternalLink, Code2, Layout, Smartphone } from "lucide-react";

const PROJECTS = [
  {
    title: "Psikomover",
    client: "Clínica de Psicología",
    description: "Plataforma digital diseñada para servicios de salud mental. Arquitectura responsiva enfocada en la accesibilidad, tiempos de carga rápidos y una experiencia de usuario (UX) que transmite profesionalismo y confianza.",
    link: "https://psikomover.netlify.app",
    tech: ["UI/UX", "Desarrollo Frontend", "Responsive", "Optimización web"]
  },
  {
    title: "Sarah's Place",
    client: "Bakery & Gastronomía",
    description: "Sitio web interactivo de alto impacto visual para un negocio gastronómico. Estructurado para destacar la identidad de marca, el catálogo de productos y facilitar la conversión de clientes mediante un diseño intuitivo.",
    link: "https://sarahsplace.netlify.app",
    tech: ["Web Design", "HTML/CSS/JS", "Despliegue", "Performance"]
  }
];

export default function DevOps() {
  return (
    <SectionShell
      id="desarrollo"
      index="04"
      eyebrow="Desarrollo Web"
      title="Sistemas construidos para escalar."
      tone="cyan"
    >
      <div className="space-y-16">
        
        <Reveal>
          <div className="prose prose-invert max-w-3xl text-ink-dim leading-relaxed text-lg">
            <p>
              No solo configuro infraestructura; construyo las interfaces que interactúan con los usuarios. 
              Desarrollo sitios web modernos, optimizados para SEO y diseñados bajo el principio de "Mobile First". 
              Aquí tienes una muestra de mi trabajo en producción.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2 mt-8">
            {PROJECTS.map((project, i) => (
              <div 
                key={i}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/40 p-8 transition-all hover:bg-surface/80 hover:border-dev/50"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-dev/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                  {/* Header de la tarjeta */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-ink-faint uppercase tracking-wider mb-2">
                        <Layout size={14} className="text-dev" />
                        {project.client}
                      </div>
                      <h3 className="text-2xl font-display font-medium text-ink group-hover:text-dev transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-ink-dim leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tags de Tecnología */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag} 
                        className="rounded-full bg-[#05070b] border border-line/50 px-3 py-1 text-xs text-ink-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de Enlace al final */}
                <div className="relative z-10 mt-8 pt-6 border-t border-line/50">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-dev transition-colors"
                  >
                    Visitar sitio en vivo
                    <ExternalLink size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        
      </div>
    </SectionShell>
  );
}