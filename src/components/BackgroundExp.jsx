import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  "Backend developer with experience in building RESTful APIs using FastAPI, Django, and Flask.",
  "Proficient with databases like PostgreSQL, SQLite, MongoDB, and Redis.",
  "Worked with frontend technologies like React to create interactive UIs.",
  "Experience with version control (Git) and CI/CD pipelines (GitHub Actions).",
  "Regular use of Docker and Kubernetes for containerization and orchestration.",
  "Experience with cloud platforms like Azure.",
  "Strong knowledge of Linux systems and scripting with Bash and Python for automation.",
  "Skilled in web scraping using Python and regex.",
];

export default function BackgroundExp() {
  return (
    <>
      <SectionHeading number="01" title="Background & Experience" />
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="nb-sm flex gap-3 bg-white p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink" />
            <span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
}
