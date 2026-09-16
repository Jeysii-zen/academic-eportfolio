import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  variant = "primary",
}) {
  const base =
    "group inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-academic-500";

  const variants = {
    primary:
      "bg-academic-950 text-white shadow-lg shadow-academic-950/15 hover:-translate-y-0.5 hover:bg-academic-900 hover:shadow-xl",
    secondary:
      "border border-slate-200 bg-white text-academic-900 shadow-sm hover:-translate-y-0.5 hover:border-academic-200 hover:bg-academic-50 hover:shadow-md",
  };

  return (
    <Link
      to={to}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}