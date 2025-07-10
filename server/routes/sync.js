const express = require("express");
const router = express.Router();
const { syncAllRepos } = require("../controllers/syncController");
const Repository = require("../models/Repository");

// POST: Sync all repos from GitHub & GitLab
router.post("/repositories", async (req, res) => {
  try {
    const repos = await syncAllRepos();
    res.status(200).json({ success: true, repos });
  } catch (err) {
    console.error("❌ Sync error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET: All synced repositories
router.get("/repositories", async (req, res) => {
  try {
    const repos = await Repository.find({});
    res.status(200).json(repos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch repositories" });
  }
});

module.exports = router;
