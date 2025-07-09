const express = require('express');
const router = express.Router();
const { syncAllRepos } = require('../utils/syncRepos');
const Repository = require('../models/Repository');

router.post('/sync/repositories', async (req, res) => {
  try {
    await syncAllRepos(process.env.GITHUB_USERNAME, process.env.GITLAB_USER_ID);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get('/repositories', async (req, res) => {
  try {
    const repos = await Repository.find({});
    res.json(repos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
});

module.exports = router;