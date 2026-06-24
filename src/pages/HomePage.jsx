import SelfCard from "../components/SelfCard";
import StackStrip from "../components/StackStrip";
import WhatIDo from "../components/WhatIDo";
import BackgroundExp from "../components/BackgroundExp";
import TechList from "../components/TechList";
import GithubRepos from "../components/GithubRepos";
import ScrollUpAction from "../components/ScrollUpAction";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <SelfCard />
      <StackStrip />
      <WhatIDo />
      <BackgroundExp />
      <TechList />
      <GithubRepos />
      <ScrollUpAction />
    </div>
  );
}
