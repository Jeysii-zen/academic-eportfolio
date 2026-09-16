export default function ThemeSurface({ children, className = "" }) {
  return <div className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] ${className}`}>{children}</div>;
}
