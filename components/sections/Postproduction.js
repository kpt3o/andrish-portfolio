import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import { Video, Mic, Workflow } from "lucide-react";

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
        
        {/* Reel de Instagram incrustado */}
        <Reveal>
          <div className="flex justify-center w-full">
            <iframe
              src="https://www.instagram.com/reel/DOg4_pGj1Uj/embed"
              width="320"
              height="540"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              className="rounded-2xl shadow-lg border border-line bg-surface"
            ></iframe>
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
                  Edición semanal de contenido para redes, de grabación a entrega lista para publicar.
                </p>
              </div>
              <div className="flex gap-8">
                <Stat value="48h" label="grabación → entrega" />
                <Stat value="+2×" label="retención promedio" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}