const axios = require("axios");
const Repository = require('../models/Repository');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITLAB_TOKEN = process.env.GITLAB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITLAB_USER_ID = process.env.GITLAB_USER_ID;

const syncAllRepos = async () => {
  try {
    const [githubRepos, gitlabRepos] = await Promise.all([
      fetchGitHubRepos(GITHUB_USERNAME),
      fetchGitLabRepos(GITLAB_USER_ID),
    ]);

    const now = new Date();

    const formattedRepos = [
      ...githubRepos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        platform: "GitHub",
        url: repo.html_url,
        lastSyncedAt: now,
      })),
      ...gitlabRepos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        stars: repo.star_count,
        platform: "GitLab",
        url: repo.web_url,
        lastSyncedAt: now,
      })),
    ];

    return formattedRepos;
  } catch (error) {
    console.error("❌ Error syncing repositories:", error.message);
    throw error;
  }
};

async function fetchGitHubRepos(GITHUB_USERNAME) {
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
  const headers = GITHUB_TOKEN
    ? { Authorization: `token ${GITHUB_TOKEN}` }
    : {};

  const response = await axios.get(url, { headers });
  return response.data;
}

const fetchGitLabRepos = async (GITLAB_USER_ID) => {
  const url = `https://gitlab.com/api/v4/users/${GITLAB_USER_ID}/projects`;
  const headers = GITLAB_TOKEN
    ? { Authorization: `Bearer ${GITLAB_TOKEN}` }
    : {};

  const response = await axios.get(url, { headers });
  return response.data;
};

module.exports = { syncAllRepos };