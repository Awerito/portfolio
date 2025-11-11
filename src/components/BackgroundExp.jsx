import { IconCircleCheck } from "@tabler/icons-react";

const experiences = [
  "Backend developer building RESTful APIs with FastAPI, Django and Flask.",
  "Proficient with databases including PostgreSQL, SQLite, MongoDB and Redis.",
  "Crafting interactive UIs with React and thoughtful component systems.",
  "Version control expertise and CI/CD automation using GitHub Actions.",
  "Comfortable orchestrating containers with Docker and Kubernetes.",
  "Hands-on experience deploying workloads to Microsoft Azure.",
  "Linux power user who automates workflows with Bash and Python scripts.",
  "Web scraping enthusiast leveraging Python tooling and regex mastery.",
];

export default function BackgroundExp() {
  return (
    <section className="section-card">
      <p className="section-subheading">Trayectoria</p>
      <h2 className="section-heading">Background &amp; Experience</h2>
      <div className="grid gap-3 text-base text-rose-900/80 dark:text-rose-50/90 md:grid-cols-2">
        {experiences.map((item) => (
          <article
            key={item}
            className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-brand-100/60 transition dark:bg-rose-950/60 dark:ring-white/5"
          >
            <span className="mt-1 text-brand-500 dark:text-brand-200">
              <IconCircleCheck size={20} />
            </span>
            <p className="leading-relaxed">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
