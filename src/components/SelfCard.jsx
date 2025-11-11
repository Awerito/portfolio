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
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl dark:bg-brand-500/40" />
      <div className="pointer-events-none absolute -right-10 top-1/3 h-60 w-60 rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-700/30" />
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
                className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 ring-1 ring-brand-100/60 dark:bg-rose-950/60 dark:ring-white/5"
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
                className="flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/70 px-4 py-2 text-sm font-medium text-rose-900 transition hover:border-brand-300 hover:bg-brand-100/80 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-brand-300/50 dark:hover:bg-brand-500/20"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center gap-4 md:w-64">
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-brand-200/60 blur-2xl dark:bg-brand-500/40" />
            <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-white/40 shadow-glow dark:border-white/20">
              <img
                src={profile}
                alt="Portrait of Diego Muñoz"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-700 dark:border-brand-300/40 dark:bg-brand-500/20 dark:text-brand-50">
            Available for work
          </span>
        </div>
      </div>
    </section>
  );
}
