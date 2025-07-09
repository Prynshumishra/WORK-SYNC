// server/controllers/syncController.js
const axios = require("axios");

const getGitHubRepos = async () => {
  const response = await axios.get("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });
  return response.data.map(repo => ({
    name: repo.name,
    url: repo.html_url,
    provider: "GitHub"
  }));
};

const getGitLabRepos = async () => {
  const response = await axios.get("https://gitlab.com/api/v4/projects?membership=true", {
    headers: {
      "PRIVATE-TOKEN": process.env.GITLAB_TOKEN
    }
  });
  return response.data.map(repo => ({
    name: repo.name,
    url: repo.web_url,
    provider: "GitLab"
  }));
};

const syncRepos = async () => {
  const github = await getGitHubRepos();
  const gitlab = await getGitLabRepos();

  return [...github, ...gitlab]; // merged list
};

module.exports = {
  getGitHubRepos,
  getGitLabRepos,
  syncRepos
};
