import profile from "../assets/imgs/me.jpg";
import { Group, Title, Avatar, Stack, List } from "@mantine/core";

export default function SelfCard() {
  return (
    <Group position="center" justify="space-evenly" style={{ marginTop: 20 }}>
      <Stack direction="horizontal" spacing="xs">
        <Title order={1}>Diego Muñoz</Title>
        <List>
          <List.Item>👷 Civil Engineer in Informatics</List.Item>
          <List.Item>💻 Software Developer</List.Item>
          <List.Item>📊 Math Enthusiast</List.Item>
          <List.Item>📈 Data Scientist</List.Item>
          <List.Item>🛠️ And More...</List.Item>
        </List>
      </Stack>
      <Avatar
        src={profile}
        alt="Diego Muñoz"
        size={150}
        radius="100%"
        style={{ marginLeft: "auto" }}
      />
    </Group>
  );
}
