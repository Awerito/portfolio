import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function GithubRepos() {
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
        setRepos(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <SectionHeading number="03" title="Public Repositories" />
      {loading && <p className="font-medium">Loading repositories…</p>}
      {error && <p className="nb-sm bg-pink px-4 py-3 font-bold">{error}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="nb-sm lift block bg-white p-4"
          >
            <div className="mb-1 flex items-center justify-between">
              <h3 className="display text-base">{repo.name}</h3>
              <ArrowUpRight className="h-4 w-4" />
            </div>
            <p className="text-sm font-medium opacity-70">
              {repo.description || "No description provided."}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}
