import profile from "../assets/imgs/me.jpg";
import {
  Group,
  Title,
  Avatar,
  Stack,
  List,
  Text,
  Anchor,
  ThemeIcon,
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
            Diego Muñoz
          </Title>
          <Group spacing="xs">
            <Anchor href="https://github.com/awerito" target="_blank">
              <ThemeIcon size="md" variant="outline">
                <IconBrandGithub size={20} />
              </ThemeIcon>
            </Anchor>
            <Anchor href="https://linkedin.com/in/awerito" target="_blank">
              <ThemeIcon size="md" variant="outline">
                <IconBrandLinkedin size={20} />
              </ThemeIcon>
            </Anchor>
            <Anchor href="https://instagram.com/aweritoh" target="_blank">
              <ThemeIcon size="md" variant="outline">
                <IconBrandInstagram size={20} />
              </ThemeIcon>
            </Anchor>
          </Group>
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
      <Avatar
        src={profile}
        alt="Diego Muñoz"
        size={150}
        radius="100%"
        style={{ marginLeft: 20 }}
      />
    </Group>
  );
}
