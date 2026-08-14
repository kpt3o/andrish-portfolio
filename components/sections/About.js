import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import { Dumbbell, Footprints, Wrench } from "lucide-react";

const HABITS = [
  { icon: Dumbbell, label: "Entrenamiento de fuerza" },
  { icon: Footprints, label: "Running" },
  { icon: Wrench, label: "Mecánica de bicicletas" },
];

export default function About() {
  return (
    <SectionShell
      id="sobre-mi"
      index="04"
      eyebrow="Sobre mí"
      title="Disciplina que también se nota fuera de la pantalla."
      tone="primary"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="max-w-xl text-lg leading-relaxed text-ink-dim">
            Estudiante de término en Ciberseguridad en la Universidad del Istmo,
            ingeniero junior y profesional independiente. Construyo herramientas
            propias cuando las que existen no terminan de encajar, y prefiero entender
            un sistema desde adentro antes de confiar en él.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="eyebrow mb-6 text-ink-faint">Ética de trabajo</p>
          <ul className="space-y-5">
            {HABITS.map((h) => (
              <li key={h.label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-primary">
                  <h.icon size={17} />
                </span>
                <span className="text-ink-dim">{h.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
}
