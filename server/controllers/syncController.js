const axios = require("axios");
const Repository = require("../models/Repository");

// Fetch repositories from GitHub
const getGitHubRepos = async () => {
  try {
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
  } catch (err) {
    console.error("❌ GitHub API Error:", err.response?.data || err.message);
    throw err;
  }
};

// Fetch repositories from GitLab
const getGitLabRepos = async () => {
  try {
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
  } catch (err) {
    console.error("❌ GitLab API Error:", err.response?.data || err.message);
    throw err;
  }
};

// Sync all repositories and save to MongoDB
const syncAllRepos = async (userId) => {
  const githubRepos = await getGitHubRepos();
  const gitlabRepos = await getGitLabRepos();

 const allRepos = [...githubRepos, ...gitlabRepos];

  // Remove user's old repos before saving new ones
  await Repository.deleteMany({});
  await Repository.insertMany(allRepos);

  return allRepos;
};


module.exports = {
  getGitHubRepos,
  getGitLabRepos,
  syncAllRepos,
};