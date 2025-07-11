const mongoose = require('mongoose');

const RepositorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      enum: ['GitHub', 'GitLab'],
      required: true,
    },
    description: {
      type: String,
      default: 'No description',
    },
    stars: {
      type: Number,
      default: 0,
    },
    url: {
      type: String,
      required: true,
    },
    lastSyncedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Repository', RepositorySchema);
