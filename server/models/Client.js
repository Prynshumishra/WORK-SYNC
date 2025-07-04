const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'], 
    default: 'active',
  },
});

module.exports = mongoose.model('Client', ClientSchema);