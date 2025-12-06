interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

interface ProcessedRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  tags: string[];
}

export async function fetchGitHubRepos(username: string): Promise<ProcessedRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Portfolio-App",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and process repos
    const processedRepos = repos
      .filter((repo) => !repo.name.includes("fork"))
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "Sem descrição disponível",
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language || "Outros",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
        tags: repo.topics || [],
      }))
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 6); // Get top 6 most recent

    return processedRepos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    throw error;
  }
}
