import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import ProgressBar from "@/components/ui/ProgressBar";
import { Swords, Terminal, Radar, Network, ShieldCheck } from "lucide-react";

const SPECIALTIES = [
  { label: "Seguridad Ofensiva", icon: Swords },
  { label: "Pentesting", icon: Terminal },
  { label: "OSINT", icon: Radar },
  { label: "Análisis de paquetes (Wireshark)", icon: Network },
];

export default function Cybersecurity() {
  return (
    <SectionShell
      id="ciberseguridad"
      index="02"
      eyebrow="Ciberseguridad"
      title="Pensar como atacante para construir defensas que resisten."
      tone="primary"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-14">
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface/60 p-7">
              <p className="eyebrow mb-6 text-ink-faint">Andrish Cyber Lab</p>
              <div className="space-y-6">
                <ProgressBar label="Laboratorio local (VMs, AD, hardening)" value={82} />
                <ProgressBar label="Redes y segmentación" value={68} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <p className="eyebrow mb-4 text-ink-faint">Especialidades técnicas</p>
              <div className="flex flex-wrap gap-3">
                {SPECIALTIES.map((s) => (
                  <Tag key={s.label} icon={s.icon}>
                    {s.label}
                  </Tag>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border-l-2 border-primary/40 pl-7">
            <p className="eyebrow mb-4 flex items-center gap-2 text-primary">
              <ShieldCheck size={14} />
              Investigación destacada
            </p>
            <h3 className="font-display text-2xl font-medium text-ink">
              Propuesta de tesis: arquitecturas Zero Trust
            </h3>
            <p className="mt-4 text-ink-dim">
              Un modelo de acceso donde ninguna solicitud se confía por defecto, ni
              siquiera dentro del perímetro corporativo: cada usuario, dispositivo y
              sesión se verifica de forma continua.
            </p>
            <p className="mt-4 text-ink-dim">
              La propuesta explora micro-segmentación y autenticación continua como
              respuesta a un perímetro de red que, en la práctica, ya no existe.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
