import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import profile from "../assets/imgs/me.jpg";

const highlights = [
  "💻 Software Developer",
  "📊 Math Enthusiast",
  "📈 Data Scientist",
  "🛠️ Python, React, Docker & more",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/awerito",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/awerito",
    icon: IconBrandLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/aweritoh",
    icon: IconBrandInstagram,
  },
];

export default function SelfCard() {
  return (
    <section className="section-card relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-brand-200/40 blur-2xl dark:bg-brand-600/25" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-48 w-48 rounded-full bg-brand-100/30 blur-xl dark:bg-brand-800/20" />
      <div className="relative flex flex-col gap-12 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="section-subheading">Hola, soy</p>
          <h1 className="section-heading text-4xl sm:text-5xl">
            Diego Muñoz <span className="text-brand-500 dark:text-brand-200">(Awerito)</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-rose-900/80 dark:text-rose-50/80">
            I craft intuitive digital experiences and resilient backend
            services. My work blends thoughtful design with solid engineering
            so that every project feels both delightful and dependable.
          </p>
          <ul className="grid gap-2 text-sm text-rose-900/80 dark:text-rose-50/90 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-brand-100/70 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-rose-950/50"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/70 px-4 py-2 text-sm font-medium text-rose-900 transition hover:border-brand-300 hover:bg-brand-100/70 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-brand-300/40 dark:hover:bg-brand-500/15"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center gap-4 md:w-64">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full border border-brand-100/50 bg-brand-50/60 blur-md dark:border-brand-500/40 dark:bg-brand-500/10" />
            <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-white/50 shadow-soft dark:border-white/20 dark:shadow-none">
              <img
                src={profile}
                alt="Portrait of Diego Muñoz"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-700 dark:border-brand-300/40 dark:bg-brand-500/15 dark:text-brand-50">
            Backend dev & profe U
          </span>
        </div>
      </div>
    </section>
  );
}
