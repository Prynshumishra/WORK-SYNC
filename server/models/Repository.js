// models/Repository.js
const mongoose = require('mongoose');

const RepositorySchema = new mongoose.Schema({
  name: String,
  platform: String, // GitHub or GitLab
  description: String,
  stars: Number,
  url: String,
  lastSyncedAt: Date,
});

module.exports = mongoose.model('Repository', RepositorySchema);
