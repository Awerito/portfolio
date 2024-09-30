import profile from "../assets/imgs/me.jpg";
import {
  Group,
  Title,
  Avatar,
  Stack,
  List,
  Text,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function SelfCard() {
  return (
    <Group position="center" style={{ marginBottom: 20, marginTop: 10 }}>
      <Stack spacing="xs" style={{ flex: 1, textAlign: "left" }}>
        <Group position="apart" style={{ width: "100%" }} align="center">
          <Title order={1} style={{ marginBottom: 0 }}>
            Diego Muñoz (Awerito)
          </Title>
        </Group>
        <Text size="sm" sx={{ color: "gray" }}>
          Passionate software developer with a knack for solving complex
          problems and creating elegant solutions. Always eager to learn and
          collaborate.
        </Text>
        <List spacing="xs">
          <List.Item>💻 Software Developer</List.Item>
          <List.Item>📊 Math Enthusiast</List.Item>
          <List.Item>📈 Data Scientist</List.Item>
          <List.Item>🛠️ Python, React, Docker, and More...</List.Item>
        </List>
      </Stack>
      <Stack align="center" style={{ marginLeft: 20 }}>
        <Avatar src={profile} alt="Diego Muñoz" size={150} radius="100%" />
        <Group justify="center" gap="xs">
          <ActionIcon
            component="a"
            href="https://github.com/awerito"
            target="_blank"
            variant="outline"
            color="pink"
          >
            <IconBrandGithub size={20} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://linkedin.com/in/awerito"
            target="_blank"
            variant="outline"
            color="pink"
          >
            <IconBrandLinkedin size={20} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://instagram.com/aweritoh"
            target="_blank"
            variant="outline"
            color="pink"
          >
            <IconBrandInstagram size={20} />
          </ActionIcon>
        </Group>
      </Stack>
    </Group>
  );
}
