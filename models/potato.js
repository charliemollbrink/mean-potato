const mongoose = require('mongoose');

const PotatoSchema = new mongoose.Schema({
  is_active: Boolean,
  current_user: Number,
  last_user: Number,
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
  ended_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Potato', PotatoSchema);
