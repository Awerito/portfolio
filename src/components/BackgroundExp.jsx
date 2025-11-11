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
      <div className="grid gap-3 text-base text-slate-700 dark:text-slate-200 md:grid-cols-2">
        {experiences.map((item) => (
          <article
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition dark:border-slate-700 dark:bg-slate-900"
          >
            <span className="mt-1 text-brand-600 dark:text-brand-200">
              <IconCircleCheck size={20} />
            </span>
            <p className="leading-relaxed">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
