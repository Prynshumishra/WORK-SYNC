const axios = require("axios");
const Repository = require("../models/Repository");

const getGitHubRepos = async () => {
  const response = await axios.get("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  return response.data.map((repo) => ({
    name: repo.name,
    description: repo.description || "No description",
    stars: repo.stargazers_count,
    url: repo.html_url,
    platform: "GitHub",
    lastSyncedAt: new Date(),
  }));
};

const getGitLabRepos = async () => {
  const response = await axios.get(
    "https://gitlab.com/api/v4/projects?membership=true",
    {
      headers: {
        "PRIVATE-TOKEN": process.env.GITLAB_TOKEN,
      },
    }
  );
  return response.data.map((repo) => ({
    name: repo.name,
    description: repo.description || "No description",
    stars: repo.star_count,
    url: repo.web_url,
    platform: "GitLab",
    lastSyncedAt: new Date(),
  }));
};

const syncAllRepos = async () => {
  const githubRepos = await getGitHubRepos();
  const gitlabRepos = await getGitLabRepos();

  const allRepos = [...githubRepos, ...gitlabRepos];

  // Remove all old repos before saving new ones
  await Repository.deleteMany({});
  await Repository.insertMany(allRepos);

  return allRepos;
};

module.exports = { syncAllRepos };
