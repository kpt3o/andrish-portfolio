import { toneOf } from "@/lib/tone";

export default function Tag({ children, icon: Icon, tone = "primary" }) {
  const t = toneOf(tone);
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm text-ink-dim">
      {Icon ? <Icon size={14} strokeWidth={2} className={t.text} /> : null}
      {children}
    </span>
  );
}
