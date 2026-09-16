export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-academic-600">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl leading-tight text-academic-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-500">{description}</p>}
    </div>
  );
}
