import { Mail, ArrowUpRight } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const LINKS = [
  { label: "GitHub", href: "https://github.com/kpt3o", icon: ArrowUpRight, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andrish-landau-93070528b/", icon: ArrowUpRight, external: true },
  { label: "Correo", href: "mailto:andrishandrish@gmail.com", icon: Mail, external: false },
];

export default function Contact() {
  return (
    <SectionShell
      id="contacto"
      index="05"
      eyebrow="Contacto"
      title="Hablemos de tu próximo proyecto."
      tone="primary"
    >
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {LINKS.map((l) => (
            <MagneticButton
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-primary/50"
            >
              <l.icon size={16} className="text-primary" />
              {l.label}
            </MagneticButton>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-16 max-w-md text-sm text-ink-faint">
          * Reemplaza estos enlaces con tus perfiles y correo reales antes de publicar el
          sitio.
        </p>
      </Reveal>
    </SectionShell>
  );
}
