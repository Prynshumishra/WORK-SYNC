// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  githubToken: String,
  gitlabToken: String,
});

module.exports = mongoose.model('User', UserSchema);
