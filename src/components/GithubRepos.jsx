import { useEffect, useState } from "react";
import { Stack, Title, Text, Anchor, Loader, Card } from "@mantine/core";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/awerito/repos",
        );
        if (!response.ok) {
          throw new Error("Error fetching repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <Stack spacing="md">
        <Title order={2} style={{ textDecoration: "underline" }}>
          My Public Repositories
        </Title>
        <Loader style={{ margin: "auto" }} />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack spacing="md">
        <Title order={2} style={{ textDecoration: "underline" }}>
          My Public Repositories
        </Title>
        <Text c="red">{error}</Text>
      </Stack>
    );
  }

  return (
    <Stack spacing="md">
      <Title order={2} style={{ textDecoration: "underline" }}>
        My Public Repositories
      </Title>
      {repos.map((repo) => (
        <Card key={repo.id} shadow="sm" padding="lg">
          <Title order={3}>
            <Anchor href={repo.html_url} target="_blank" c="violet">
              {repo.name}
            </Anchor>
          </Title>
          <Text size="sm" c="dimmed">
            {repo.description ? repo.description : "No description provided."}
          </Text>
        </Card>
      ))}
    </Stack>
  );
};

export default GitHubRepos;
