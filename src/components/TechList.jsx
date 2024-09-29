import { Badge, Grid, Group, Image, Title, rem } from "@mantine/core";
import {
  IconBrandCss3,
  IconBrandDjango,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandMongodb,
  IconCalendarEvent,
  IconDatabase,
  IconBrandBootstrap,
} from "@tabler/icons-react";
import pandasLogo from "../assets/pandas.svg";
import fastapiLogo from "../assets/fastapi.svg";
import redisLogo from "../assets/redis.svg";
import postgresLogo from "../assets/postgres.svg";

const iconStyle = { width: rem(12), height: rem(12) };

const techFrontend = [
  {
    name: "JavaScript",
    type: "Language",
    color: "#f0db4f",
    icon: <IconBrandJavascript style={iconStyle} />,
  },
  {
    name: "React",
    type: "Framework",
    color: "#61dafb",
    icon: <IconBrandReact style={iconStyle} />,
  },
  {
    name: "CSS",
    type: "Styling",
    color: "#2965f1",
    icon: <IconBrandCss3 style={iconStyle} />,
  },
  {
    name: "Bootstrap",
    type: "Styling",
    color: "#7952b3",
    icon: <IconBrandBootstrap style={iconStyle} />,
  },
  {
    name: "Mantine",
    type: "UI Library",
    color: "#5799eb",
    icon: <IconBrandMantine style={iconStyle} />,
  },
  {
    name: "Node.js",
    type: "Runtime",
    color: "#68a063",
    icon: <IconBrandNodejs style={iconStyle} />,
  },
];

const techBackend = [
  {
    name: "Python",
    type: "Language",
    color: "#4281b5",
    icon: <IconBrandPython style={iconStyle} />,
  },
  {
    name: "FastAPI",
    type: "Framework",
    color: "#009485",
    icon: <Image src={fastapiLogo} style={iconStyle} />,
  },
  {
    name: "Django",
    type: "Framework",
    color: "#0a3c29",
    icon: <IconBrandDjango style={iconStyle} />,
  },
  {
    name: "MongoDB",
    type: "Database",
    color: "#01ed64",
    icon: <IconBrandMongodb style={iconStyle} />,
  },
  {
    name: "Postgres",
    type: "Database",
    color: "#316691",
    icon: <Image src={postgresLogo} style={iconStyle} />,
  },
  {
    name: "Redis",
    type: "Database",
    color: "#fe4438",
    icon: <Image src={redisLogo} style={iconStyle} />,
  },
  {
    name: "SQLAlchemy",
    type: "ORM",
    color: "#aa1b02",
    icon: <IconDatabase style={iconStyle} />,
  },
  {
    name: "Motor",
    type: "ORM",
    color: "#8dacbf",
    icon: <IconBrandMongodb style={iconStyle} />,
  },
  {
    name: "Pymongo",
    type: "ORM",
    color: "#4ea94b",
    icon: <IconBrandMongodb style={iconStyle} />,
  },
  {
    name: "Pandas",
    type: "Library",
    color: "#120654",
    icon: <Image src={pandasLogo} style={iconStyle} />,
  },
  {
    name: "APScheduler",
    type: "Library",
    color: "#f0db4f",
    icon: <IconCalendarEvent style={iconStyle} />,
  },
];

const TechCategory = ({ title, technologies }) => {
  const categories = [...new Set(technologies.map((tech) => tech.type))];

  return (
    <div>
      <Title order={3} style={{ marginBottom: "10px" }}>
        {title}
      </Title>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "15px" }}>
          <Title order={4}>{category}</Title>
          <Group spacing="xs">
            {technologies
              .filter((tech) => tech.type === category)
              .map((tech) => (
                <Badge
                  key={tech.name}
                  variant="outline"
                  color={tech.color}
                  leftSection={tech.icon}
                >
                  {tech.name}
                </Badge>
              ))}
          </Group>
        </div>
      ))}
    </div>
  );
};

const TechLists = () => {
  return (
    <Group align="stretch" style={{ marginTop: 20 }}>
      <Title order={2} style={{ textDecoration: "underline" }}>
        Tech Stack
      </Title>
      <Grid>
        <Grid.Col span={6}>
          <TechCategory title="Frontend" technologies={techFrontend} />
        </Grid.Col>
        <Grid.Col span={6}>
          <TechCategory title="Backend" technologies={techBackend} />
        </Grid.Col>
      </Grid>
    </Group>
  );
};

export default TechLists;
