const express = require("express");
const router = express.Router();
const { syncAllRepos } = require("../controllers/syncController");
const Repository = require("../models/Repository");

router.post("/sync/repositories", async (req, res) => {
  try {
    const repos = await syncAllRepos(); // no userId
    res.status(200).json({ success: true, repos });
  } catch (err) {
    console.error("❌ Sync error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get("/repositories", async (req, res) => {
  try {
    console.log("Fetching repositories..."); // debug log
    const repos = await Repository.find({});
    console.log("Fetched:", repos.length);
    res.status(200).json(repos);
  } catch (err) {
    console.error("Error in GET /repositories:", err.message); // 👈 Add this
    res.status(500).json({ error: "Failed to fetch repositories" });
  }
});


module.exports = router;
