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
        <div className="flex flex-col items-center gap-3 py-12 text-sm text-slate-600 dark:text-slate-200">
          <span className="h-12 w-12 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
          <p>Fetching projects from GitHub...</p>
        </div>
      )}

      {!loading && error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-500/50 dark:bg-red-500/10 dark:text-red-100">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-300/60 dark:hover:bg-slate-800"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-display text-slate-900 dark:text-white">
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
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-200">
                  {repo.description || "No description provided."}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-200">
                <span className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-800">
                  <IconGitBranch size={16} />
                  {repo.default_branch}
                </span>
                <span className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-800">
                  <IconStar size={16} />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-800">
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
