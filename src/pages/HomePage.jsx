import SelfCard from "../components/SelfCard";
import TechList from "../components/TechList";
import BackgroundExp from "../components/BackgroundExp";
import ScrollUpAction from "../components/ScrollUpAction";
import GithubRepos from "../components/GithubRepos";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-900/30 via-slate-900 to-brand-700/20" />
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16 sm:px-8 lg:px-12">
        <SelfCard />

        <BackgroundExp />

        <TechList />

        <GithubRepos />
      </main>
      <ScrollUpAction />
    </div>
  );
}
