import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDjango,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconCalendarEvent,
  IconDatabase,
} from "@tabler/icons-react";
import fastapiLogo from "../assets/fastapi.svg";
import pandasLogo from "../assets/pandas.svg";
import postgresLogo from "../assets/postgres.svg";
import redisLogo from "../assets/redis.svg";

const iconClassName = "h-4 w-4";

const techFrontend = [
  {
    name: "JavaScript",
    type: "Language",
    color: "#f0db4f",
    icon: () => <IconBrandJavascript className={iconClassName} />, 
  },
  {
    name: "React",
    type: "Framework",
    color: "#61dafb",
    icon: () => <IconBrandReact className={iconClassName} />, 
  },
  {
    name: "CSS",
    type: "Styling",
    color: "#2965f1",
    icon: () => <IconBrandCss3 className={iconClassName} />, 
  },
  {
    name: "Bootstrap",
    type: "Styling",
    color: "#7952b3",
    icon: () => <IconBrandBootstrap className={iconClassName} />, 
  },
  {
    name: "Mantine",
    type: "UI Library",
    color: "#5799eb",
    icon: () => <IconBrandMantine className={iconClassName} />, 
  },
  {
    name: "Node.js",
    type: "Runtime",
    color: "#68a063",
    icon: () => <IconBrandNodejs className={iconClassName} />, 
  },
];

const techBackend = [
  {
    name: "Python",
    type: "Language",
    color: "#4281b5",
    icon: () => <IconBrandPython className={iconClassName} />, 
  },
  {
    name: "FastAPI",
    type: "Framework",
    color: "#009485",
    icon: () => (
      <img src={fastapiLogo} alt="FastAPI" className="h-4 w-4" loading="lazy" />
    ),
  },
  {
    name: "Django",
    type: "Framework",
    color: "#0a3c29",
    icon: () => <IconBrandDjango className={iconClassName} />, 
  },
  {
    name: "MongoDB",
    type: "Database",
    color: "#01ed64",
    icon: () => <IconBrandMongodb className={iconClassName} />, 
  },
  {
    name: "Postgres",
    type: "Database",
    color: "#316691",
    icon: () => (
      <img src={postgresLogo} alt="PostgreSQL" className="h-4 w-4" loading="lazy" />
    ),
  },
  {
    name: "Redis",
    type: "Database",
    color: "#fe4438",
    icon: () => (
      <img src={redisLogo} alt="Redis" className="h-4 w-4" loading="lazy" />
    ),
  },
  {
    name: "SQLAlchemy",
    type: "ORM",
    color: "#aa1b02",
    icon: () => <IconDatabase className={iconClassName} />, 
  },
  {
    name: "Motor",
    type: "ORM",
    color: "#8dacbf",
    icon: () => <IconBrandMongodb className={iconClassName} />, 
  },
  {
    name: "Pymongo",
    type: "ORM",
    color: "#4ea94b",
    icon: () => <IconBrandMongodb className={iconClassName} />, 
  },
  {
    name: "Pandas",
    type: "Library",
    color: "#120654",
    icon: () => (
      <img src={pandasLogo} alt="Pandas" className="h-4 w-4" loading="lazy" />
    ),
  },
  {
    name: "APScheduler",
    type: "Library",
    color: "#f0db4f",
    icon: () => <IconCalendarEvent className={iconClassName} />, 
  },
];

const TechPill = ({ name, color, Icon }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-900 dark:text-rose-50"
    style={{
      borderColor: `${color}40`,
      backgroundColor: `${color}18`,
    }}
  >
    <span
      className="flex items-center justify-center rounded-full bg-white/60 p-1 text-xs dark:bg-rose-950/70"
      style={{ color }}
    >
      <Icon />
    </span>
    {name}
  </span>
);

const TechCategory = ({ title, technologies }) => {
  const categories = [...new Set(technologies.map((tech) => tech.type))];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-display text-rose-950 dark:text-white">{title}</h3>
      {categories.map((category) => (
        <div key={category} className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500/80 dark:text-brand-200/80">
            {category}
          </h4>
          <div className="flex flex-wrap gap-3">
            {technologies
              .filter((tech) => tech.type === category)
              .map((tech) => (
                <TechPill key={tech.name} name={tech.name} color={tech.color} Icon={tech.icon} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const TechLists = () => {
  return (
    <section className="section-card">
      <p className="section-subheading">Habilidades Clave</p>
      <h2 className="section-heading">Technologies Stack</h2>
      <div className="grid gap-10 md:grid-cols-2">
        <TechCategory title="Frontend" technologies={techFrontend} />
        <TechCategory title="Backend" technologies={techBackend} />
      </div>
    </section>
  );
};

export default TechLists;
