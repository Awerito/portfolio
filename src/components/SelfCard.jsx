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
    <section className="section-card">
      <div className="flex flex-col gap-12 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="section-subheading">Hola, soy</p>
          <h1 className="section-heading text-4xl sm:text-5xl">
            Diego Muñoz <span className="text-brand-500 dark:text-brand-200">(Awerito)</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-200">
            I craft intuitive digital experiences and resilient backend
            services. My work blends thoughtful design with solid engineering
            so that every project feels both delightful and dependable.
          </p>
          <ul className="grid gap-2 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
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
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center gap-4 md:w-64">
          <div className="relative">
            <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-white/80 shadow-md dark:border-slate-700/80">
              <img
                src={profile}
                alt="Portrait of Diego Muñoz"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-700 dark:border-brand-300/40 dark:bg-brand-500/20 dark:text-brand-50">
            Backend dev &amp; profesor universitario
          </span>
        </div>
      </div>
    </section>
  );
}
