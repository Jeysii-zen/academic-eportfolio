export default function HighlightCard({ eyebrow, title, description, number }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-academic-100">
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-academic-600">{eyebrow}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-academic-50 text-xs font-bold text-academic-700">
          {number}
        </span>
      </div>
      <h3 className="mt-7 font-display text-2xl text-academic-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </article>
  );
}
