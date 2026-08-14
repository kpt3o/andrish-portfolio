import Reveal from "@/components/ui/Reveal";
import { toneOf } from "@/lib/tone";

export default function SectionShell({ id, index, eyebrow, title, tone = "primary", children }) {
  const t = toneOf(tone);
  return (
    <section
      id={id}
      className="relative mx-auto flex min-h-screen w-full max-w-6xl scroll-mt-24 flex-col justify-center px-6 py-28 sm:px-10"
    >
      <Reveal>
        <p className={`eyebrow mb-5 flex items-center gap-3 ${t.text}`}>
          <span className="tabular">{index}</span>
          <span className="h-px w-8 bg-current opacity-50" />
          {eyebrow}
        </p>
      </Reveal>

      {title ? (
        <Reveal delay={0.05} className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </Reveal>
      ) : null}

      <div className="mt-14">{children}</div>
    </section>
  );
}
