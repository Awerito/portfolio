import ThemeToggle from "../components/ThemeToggle";
import SelfCard from "../components/SelfCard";
import TechList from "../components/TechList";
import BackgroundExp from "../components/BackgroundExp";
import ScrollUpAction from "../components/ScrollUpAction";
import GithubRepos from "../components/GithubRepos";

export default function HomePage({ theme, onToggleTheme }) {
  return (
    <div className="relative min-h-screen transition-colors duration-300">
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16 sm:px-8 lg:px-12">
        <div className="flex items-center justify-end">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <SelfCard />

        <BackgroundExp />

        <TechList />

        <GithubRepos />
      </main>
      <ScrollUpAction />
    </div>
  );
}
