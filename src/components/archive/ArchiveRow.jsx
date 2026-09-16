export default function ArchiveRow({ item }) {
  return (
    <article className="group grid gap-4 border-t border-[var(--border)] py-5 md:grid-cols-[70px_150px_minmax(0,1fr)_110px] md:items-start md:gap-6">
      <span className="font-mono text-[11px] text-[var(--muted)]">{item.id}</span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{item.category}</p>
        <p className="mt-1 text-[11px] text-[var(--muted)]">{item.year} · {item.type}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-[var(--text)] transition group-hover:text-[var(--accent)]">{item.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{item.description}</p>
      </div>
      <div className="flex justify-start md:justify-end">
        <span className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">View record</span>
      </div>
    </article>
  );
}
