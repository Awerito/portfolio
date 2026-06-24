import SectionHeading from "./SectionHeading";
import BrandIcon from "./BrandIcon";

// `slug` is a Simple Icons brand slug (https://cdn.simpleicons.org/<slug>).
// Set it to null when no brand logo exists; the chip then shows text only.
const frontend = [
  { name: "JavaScript", slug: "javascript" },
  { name: "React", slug: "react" },
  { name: "CSS", slug: "css" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Mantine", slug: "mantine" },
  { name: "Node.js", slug: "nodedotjs" },
];

const backend = [
  { name: "Python", slug: "python" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Django", slug: "django" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Postgres", slug: "postgresql" },
  { name: "Redis", slug: "redis" },
  { name: "SQLAlchemy", slug: "sqlalchemy" },
  { name: "Motor", slug: null },
  { name: "Pymongo", slug: null },
  { name: "Pandas", slug: "pandas" },
  { name: "APScheduler", slug: null },
];

function Chips({ techs }) {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map(({ name, slug }) => (
        <span
          key={name}
          className="nb-sm flex items-center gap-1.5 bg-white px-2.5 py-1.5 text-sm font-bold"
        >
          {slug && <BrandIcon slug={slug} />}
          {name}
        </span>
      ))}
    </div>
  );
}

export default function TechList() {
  return (
    <>
      <SectionHeading number="02" title="Tech Stack" />
      <div className="mb-4">
        <p className="mb-2 text-sm font-bold">Frontend</p>
        <Chips techs={frontend} />
      </div>
      <div>
        <p className="mb-2 text-sm font-bold">Backend</p>
        <Chips techs={backend} />
      </div>
    </>
  );
}
