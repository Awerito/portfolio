import { Title, List } from "@mantine/core";

export default function BackgroundExp() {
  return (
    <>
      <Title order={2} style={{ textDecoration: "underline" }}>
        Background & Experience
      </Title>
      <List style={{ marginBottom: 20 }}>
        <List.Item>
          Backend developer with experience in building RESTful APIs using
          FastAPI, Django, and Flask.
        </List.Item>
        <List.Item>
          Proficient with databases like PostgreSQL, SQLite, MongoDB, and Redis.
        </List.Item>
        <List.Item>
          Worked with frontend technologies like React to create interactive
          UIs.
        </List.Item>
        <List.Item>
          Experience with version control (Git) and CI/CD pipelines (GitHub
          Actions).
        </List.Item>
        <List.Item>
          Regular use of Docker and Kubernetes for containerization and
          orchestration.
        </List.Item>
        <List.Item>Experience with cloud platforms like Azure.</List.Item>
        <List.Item>
          Strong knowledge of Linux systems and scripting with Bash and Python
          for automation.
        </List.Item>
        <List.Item>Skilled in web scraping using Python and regex.</List.Item>
      </List>
    </>
  );
}
