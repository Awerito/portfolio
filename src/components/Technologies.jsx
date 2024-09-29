import { Badge, Grid, Group, Title } from "@mantine/core";

const techFrontend = [
  { name: "React", type: "Framework" },
  { name: "JavaScript", type: "Language" },
  { name: "TypeScript", type: "Language" },
  { name: "CSS", type: "Styling" },
  { name: "Sass", type: "Styling" },
  { name: "Redux", type: "Data manipulation" },
  { name: "Axios", type: "Data manipulation" },
];

const techBackend = [
  { name: "Node.js", type: "Framework" },
  { name: "Express", type: "Framework" },
  { name: "JavaScript", type: "Language" },
  { name: "TypeScript", type: "Language" },
  { name: "MongoDB", type: "Database" },
  { name: "PostgreSQL", type: "Database" },
  { name: "Prisma", type: "ORM" },
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
                <Badge key={tech.name} variant="filled" color="blue">
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
    <Grid>
      <Grid.Col span={6}>
        <TechCategory
          title="Frontend Technologies"
          technologies={techFrontend}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <TechCategory title="Backend Technologies" technologies={techBackend} />
      </Grid.Col>
    </Grid>
  );
};

export default TechLists;
