import { IconMoonStars, IconSunHigh } from "@tabler/icons-react";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  const Icon = isDark ? IconSunHigh : IconMoonStars;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      aria-pressed={isDark}
      aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
    >
      <span className="flex items-center justify-center rounded-full bg-brand-50 p-1 text-brand-700 transition group-hover:bg-brand-100 dark:bg-brand-500/20 dark:text-brand-100 dark:group-hover:bg-brand-400/30">
        <Icon size={18} />
      </span>
      {isDark ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}
