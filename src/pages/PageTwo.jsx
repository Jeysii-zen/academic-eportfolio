import { useMemo, useState } from "react";
import SectionLabel from "../components/ui/SectionLabel";
import ArchiveRow from "../components/archive/ArchiveRow";
import { archiveCategories, archiveItems } from "../data/portfolioData";

export default function PageTwo() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? archiveItems : archiveItems.filter((item) => item.category === active), [active]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <header className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-[0.94] tracking-[-0.045em] text-[var(--text)] sm:text-6xl">A living index of learning.</h1>
        </div>
        <div className="self-end border-l-2 border-[var(--accent)] pl-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
          Use this page as a structured repository for academic outputs, presentations, activities, certificates, projects, and reflective records. The sample entries below are editable placeholders.
        </div>
      </header>

      <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
        <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Record index</p>
            <p className="mt-1 text-sm text-[var(--text)]">{filtered.length} record{filtered.length === 1 ? "" : "s"} shown</p>
          </div>
          <div
              className="flex min-w-0 flex-wrap gap-2 pb-1"
              aria-label="Archive filters"
            >
            {archiveCategories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`max-w-full whitespace-normal rounded-full border px-3 py-2 text-[9px] font-bold uppercase tracking-[0.11em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] ${active === category ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          {filtered.map((item) => <ArchiveRow key={item.id} item={item} />)}
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          ["Archive rule", "Keep each record concise, dated, and easy to revisit."],
          ["Media slot", "Attach a document, image, presentation, or link to a real academic artifact."],
          ["Reflection link", "Pair important outputs with a short note about what you learned."],
        ].map(([title, body], index) => (
          <article key={title} className="border-t border-[var(--border)] pt-5">
            <p className="font-mono text-[10px] text-[var(--accent)]">0{index + 1}</p>
            <h2 className="mt-3 text-base font-semibold text-[var(--text)]">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
