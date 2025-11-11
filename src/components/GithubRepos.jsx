import { useEffect, useState } from "react";
import {
  IconArrowUpRight,
  IconGitBranch,
  IconGitFork,
  IconStar,
} from "@tabler/icons-react";

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
        const sorted = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sorted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="section-card">
      <p className="section-subheading">Open Source</p>
      <h2 className="section-heading">My Public Repositories</h2>

      {loading && (
        <div className="flex flex-col items-center gap-3 py-12 text-sm text-rose-900/70 dark:text-rose-100/80">
          <span className="h-12 w-12 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
          <p>Fetching projects from GitHub...</p>
        </div>
      )}

      {!loading && error && (
        <div className="rounded-2xl border border-rose-400/60 bg-rose-100/70 px-4 py-3 text-sm text-rose-900 dark:border-rose-400/40 dark:bg-rose-500/10 dark:text-rose-100">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="group flex h-full flex-col justify-between rounded-2xl border border-brand-100/60 bg-white/70 p-6 transition hover:border-brand-300/60 hover:bg-brand-50/80 dark:border-white/5 dark:bg-slate-900/80 dark:hover:bg-slate-900"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-display text-rose-950 dark:text-white">
                    {repo.name}
                  </h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600 transition group-hover:text-brand-500 dark:text-brand-200 dark:group-hover:text-brand-100"
                  >
                    View
                    <IconArrowUpRight size={16} />
                  </a>
                </div>
                <p className="text-sm leading-relaxed text-rose-900/80 dark:text-rose-100/80">
                  {repo.description || "No description provided."}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-rose-900/70 dark:text-rose-100/80">
                <span className="flex items-center gap-1 rounded-full bg-brand-50/80 px-3 py-1 dark:bg-white/5">
                  <IconGitBranch size={16} />
                  {repo.default_branch}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-brand-50/80 px-3 py-1 dark:bg-white/5">
                  <IconStar size={16} />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-brand-50/80 px-3 py-1 dark:bg-white/5">
                  <IconGitFork size={16} />
                  {repo.forks_count}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default GitHubRepos;
