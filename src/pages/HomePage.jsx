import { Container } from "@mantine/core";
import SelfCard from "../components/SelfCard";
import TechList from "../components/TechList";
import BackgroundExp from "../components/BackgroundExp";
import ScrollUpAction from "../components/ScrollUpAction";
import GithubRepos from "../components/GithubRepos";

export default function HomePage() {
  return (
    <Container size="xs">
      <SelfCard />

      <BackgroundExp />

      <TechList />

      <GithubRepos />

      <ScrollUpAction />
    </Container>
  );
}
