"use client";

import SectionShell from "@/components/ui/SectionShell";
import { GitHubCalendar } from 'react-github-calendar';
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { Gauge, Route, Cpu } from "lucide-react";

const STACK = ["Notion", "Trello", "Asana", "Obsidian"];

const SPECS = [
  { label: "CPU", value: "AMD Ryzen 9 5900X" },
  { label: "GPU", value: "Radeon RX 6800" },
  { label: "RAM", value: "32 GB" },
  { label: "Almacenamiento", value: "Kingston SSD" },
];

export default function DevOps() {
  return (
    <SectionShell
      id="desarrollo"
      index="03"
      eyebrow="Desarrollo y Operaciones"
      title="Herramientas propias para problemas propios."
      tone="dev"
    >
      <div className="space-y-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface/60 p-7">
              <Gauge size={20} className="text-dev" />
              <h3 className="mt-4 font-display text-xl font-medium text-ink">
                SMI Performance Tracker
              </h3>
              <p className="mt-3 text-sm text-ink-dim">
                Aplicación web construida a medida para monitorear métricas de rendimiento
                en tiempo real y centralizar reportes que antes vivían dispersos en hojas
                de cálculo.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-line bg-surface/60 p-7">
              <Route size={20} className="text-dev" />
              <h3 className="mt-4 font-display text-xl font-medium text-ink">Gestión y logística</h3>
              <p className="mt-3 text-sm text-ink-dim">
                Documentación de SOPs y planificación logística de rutas a gran escala, con
                foco en reducir tiempos muertos y errores de comunicación entre equipos.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div>
            <p className="eyebrow mb-4 text-ink-faint">Stack de trabajo</p>
            <div className="flex flex-wrap gap-3">
              {STACK.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-line bg-surface p-7 font-mono">
            <p className="eyebrow mb-5 flex items-center gap-2 text-dev">
              <Cpu size={14} />
              hardware --setup
            </p>
            <dl className="grid gap-3 sm:grid-cols-2">
              {SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-2"
                >
                  <dt className="text-xs uppercase tracking-wide text-ink-faint">{spec.label}</dt>
                  <dd className="text-sm text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

      {/* Tablero de Actividad de GitHub */}
        <Reveal>
          <div className="w-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-8 flex flex-col items-center gap-6 mt-16">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h3 className="font-display text-2xl font-medium text-ink">Actividad en Código</h3>
                <p className="text-sm text-ink-dim mt-1">Contribuciones a repositorios y proyectos</p>
              </div>
              <a 
                href="https://github.com/kpt3o" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-ink-faint hover:text-dev transition-colors underline underline-offset-4"
              >
                Ver en GitHub
              </a>
            </div>
            
            <div className="w-full overflow-x-auto pb-4 flex justify-center">
              <GitHubCalendar 
                username="kpt3o" 
                colorScheme="dark"
                theme={{
                  dark: [
                    '#05070b', // Nivel 0: Fondo base
                    '#1a2e38', // Nivel 1: Azul muy tenue
                    '#2a5a6b', // Nivel 2: Azul medio
                    '#3a8b9e', // Nivel 3: Azul intenso
                    '#63d9f2'  // Nivel 4: Cian eléctrico brillante
                  ]
                }}
                labels={{
                  totalCount: '{{count}} contribuciones en el último año',
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}