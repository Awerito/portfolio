import { Container } from "@mantine/core";
import SelfCard from "../components/SelfCard";
import TechList from "../components/TechList";
import BackgroundExp from "../components/BackgroundExp";

export default function HomePage() {
  return (
    <Container size="xs">
      <SelfCard />

      <BackgroundExp />

      <TechList />
    </Container>
  );
}
