import { IconMoonStars, IconSunHigh } from "@tabler/icons-react";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  const Icon = isDark ? IconSunHigh : IconMoonStars;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-rose-900 shadow-sm transition hover:border-brand-300 hover:bg-brand-100/70 dark:border-white/10 dark:bg-white/5 dark:text-rose-50 dark:hover:border-brand-300/60 dark:hover:bg-brand-500/10"
      aria-pressed={isDark}
      aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
    >
      <span className="flex items-center justify-center rounded-full bg-brand-100/60 p-1 text-brand-700 transition group-hover:bg-brand-200 dark:bg-brand-500/20 dark:text-brand-200 dark:group-hover:bg-brand-500/30">
        <Icon size={18} />
      </span>
      {isDark ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}
