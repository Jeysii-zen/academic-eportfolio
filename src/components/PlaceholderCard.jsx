export default function PlaceholderCard({ title = '[FEATURED ITEM]', description = '[DESCRIPTION]', className = '' }) {
  return (
    <article className={`rounded-3xl border border-dashed border-slate-300 bg-white/70 p-6 transition-all duration-200 hover:border-academic-500 hover:bg-white ${className}`}>
      <div className="mb-8 flex h-28 items-center justify-center rounded-2xl bg-academic-50 text-xs font-semibold uppercase tracking-[0.16em] text-academic-500">
        [IMAGE / MEDIA PLACEHOLDER]
      </div>
      <h3 className="font-display text-xl text-academic-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </article>
  );
}
