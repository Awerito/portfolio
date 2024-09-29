import { Container } from "@mantine/core";
import SelfCard from "../components/SelfCard";
import TechList from "../components/TechList";

export default function HomePage() {
  return (
    <Container size="sm">
      <SelfCard />

      <TechList />
    </Container>
  );
}
