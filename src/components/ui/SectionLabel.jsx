export default function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
      <span className="font-mono text-[var(--accent)]">{number}</span>
      <span className="h-px w-7 bg-[var(--border-strong)]" />
      <span>{children}</span>
    </div>
  );
}
