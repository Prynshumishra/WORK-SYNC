const axios = require("axios");
const Repository = require('../models/Repository');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITLAB_TOKEN = process.env.GITLAB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITLAB_USER_ID = process.env.GITLAB_USER_ID;

const syncAllRepos = async () => {
  try {
    console.log("🔄 Syncing repos...");
    console.log("✅ ENV:", {
      GITHUB_USERNAME,
      GITLAB_USER_ID,
      GITHUB_TOKEN: !!GITHUB_TOKEN,
      GITLAB_TOKEN: !!GITLAB_TOKEN,
    });

    const [githubRepos, gitlabRepos] = await Promise.all([
      fetchGitHubRepos(GITHUB_USERNAME),
      fetchGitLabRepos(GITLAB_USER_ID),
    ]);
    console.log("✅ GitHub Repos:", githubRepos.length);
    console.log("✅ GitLab Repos:", gitlabRepos.length);

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

    console.log("✅ Total Synced Repos:", formattedRepos.length);


    return formattedRepos;

  } catch (error) {
    console.error("❌ Error syncing repositories:", error.message);
     if (error.response) {
    console.error("📦 Status Code:", error.response.status);
    console.error("📦 Full Response:", error.response.data);
  }
  throw error;
  }
};

async function fetchGitHubRepos(GITHUB_USERNAME) {
  try {
    const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
    const headers = GITHUB_TOKEN
      ? { Authorization: `token ${GITHUB_TOKEN}` }
      : {};

    const response = await axios.get(url, { headers });
    return response.data;
  } catch (err) {
    console.error("❌ GitHub fetch failed:", err.response?.data || err.message);
    throw err;
  }
}

const fetchGitLabRepos = async (GITLAB_USER_ID) => {
  try {
    const url = `https://gitlab.com/api/v4/users/${GITLAB_USER_ID}/projects`;
    const headers = GITLAB_TOKEN
      ? { Authorization: `Bearer ${GITLAB_TOKEN}` }
      : {};

    const response = await axios.get(url, { headers });
    return response.data;
  } catch (err) {
    console.error("❌ GitLab fetch failed:", err.response?.data || err.message);
    throw err;
  }
};

module.exports = { syncAllRepos };
