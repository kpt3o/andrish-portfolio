import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import { CirclePlay, Video, Mic, Workflow } from "lucide-react";

const SERVICES = [
  {
    icon: Video,
    title: "Edición de reels",
    desc: "Ritmo, corte y color pensados para retener desde los primeros segundos.",
  },
  {
    icon: Mic,
    title: "Podcasts",
    desc: "Limpieza de audio, multicámara y capítulos listos para publicar.",
  },
  {
    icon: Workflow,
    title: "Flujos de postproducción",
    desc: "Organización de proyecto y plantillas que escalan con el volumen de entregas.",
  },
];

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold text-edit">{value}</p>
      <p className="mt-1 max-w-[8rem] text-xs text-ink-faint">{label}</p>
    </div>
  );
}

export default function Postproduction() {
  return (
    <SectionShell
      id="edicion"
      index="02"
      eyebrow="Edición y Postproducción"
      title="Cada corte defiende una idea."
      tone="edit"
    >
      <div className="space-y-16">
        <Reveal>
          <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-surface">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(180deg, rgba(242,166,90,0.07) 0px, rgba(242,166,90,0.07) 1px, transparent 1px, transparent 3px)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-edit/50 text-edit transition-transform duration-300 group-hover:scale-110">
                <CirclePlay size={28} />
              </span>
              <p className="eyebrow text-ink-faint">Demo Reel — próximamente</p>
            </div>
            <p className="eyebrow absolute bottom-5 left-6 text-ink-faint">Andrish Experience</p>
          </div>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <s.icon size={20} className="text-edit" />
              <h3 className="mt-4 font-display text-lg font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-dim">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl border border-line bg-surface/60 p-8">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow mb-3 text-ink-faint">Caso de éxito</p>
                <h3 className="font-display text-2xl font-medium text-ink">Winnie Suku</h3>
                <p className="mt-2 max-w-md text-sm text-ink-dim">
                  Edición semanal de contenido para redes, de grabación a entrega lista para
                  publicar.
                </p>
              </div>
              <div className="flex gap-8">
                <Stat value="48h" label="grabación → entrega" />
                <Stat value="+2×" label="retención promedio" />
              </div>
            </div>
            <p className="mt-6 text-xs text-ink-faint">
              * Cifras de ejemplo — reemplázalas con tus resultados reales.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
