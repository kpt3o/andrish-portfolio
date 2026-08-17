import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import { Shield, Terminal, Server, Cpu } from "lucide-react";

const TECH_STACK = [
  "Wireshark",
  "Linux Systems",
  "PowerShell",
  "Python",
  "Cloud Storage",
  "Hardware & PC Building",
  "Network Analysis"
];

export default function Cybersecurity() {
  return (
    <SectionShell
      id="ciberseguridad"
      index="02"
      eyebrow="Ciberseguridad & Infraestructura"
      title="Entendiendo el sistema desde adentro."
      tone="cyan"
    >
      <div className="space-y-12">
        
        <Reveal>
          <div className="prose prose-invert max-w-3xl text-ink-dim leading-relaxed text-lg">
            <p>
              Prefiero desarmar un sistema y entender sus cimientos antes de confiar ciegamente en él. Mi enfoque en ciberseguridad e infraestructura no se basa solo en teoría, sino en la capacidad de construir y auditar desde el hardware hasta el almacenamiento en la nube.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-8 md:grid-cols-2 mt-8 border-t border-line/50 pt-12">
            
            {/* Columna 1: Ciberseguridad y Redes */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="text-dev" size={24} />
                <h3 className="font-display text-xl font-medium text-ink">Redes & Seguridad</h3>
              </div>
              <p className="text-ink-dim leading-relaxed text-sm">
                Análisis profundo de tráfico, identificación de vulnerabilidades y automatización de procesos. Auditoría de redes a nivel de paquetes y gestión de entornos seguros.
              </p>
              <div className="flex items-center gap-2 text-sm text-ink-faint">
                <Terminal size={16} className="text-dev/70" />
                <span>Scripting para automatización y pentesting.</span>
              </div>
            </div>

            {/* Columna 2: Infraestructura y Hardware */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Server className="text-dev" size={24} />
                <h3 className="font-display text-xl font-medium text-ink">Infraestructura & Hardware</h3>
              </div>
              <p className="text-ink-dim leading-relaxed text-sm">
                Desde el ensamblaje de estaciones de trabajo de alto rendimiento (PC Building) a medida para edición y desarrollo, hasta la implementación de soluciones de almacenamiento en la nube escalables.
              </p>
              <div className="flex items-center gap-2 text-sm text-ink-faint">
                <Cpu size={16} className="text-dev/70" />
                <span>Optimización de recursos físicos y virtuales.</span>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Píldoras del Stack Tecnológico */}
        <Reveal>
          <div className="mt-8 pt-8 border-t border-line/10">
            <p className="text-xs font-mono text-ink-faint uppercase tracking-wider mb-4">
              Arsenal Técnico
            </p>
            <div className="flex flex-wrap gap-3">
              {TECH_STACK.map((tech) => (
                <div 
                  key={tech} 
                  className="rounded-lg bg-surface/50 border border-line px-4 py-2 text-sm font-medium text-ink hover:text-dev hover:border-dev/50 transition-colors cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </SectionShell>
  );
}