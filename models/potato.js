const mongoose = require('mongoose');

const PotatoSchema = new mongoose.Schema({
  id: Number,
  is_active: Boolean,
  current_user: Number,
  last_user: Number,
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
  ended_date: { type: Date },
});

module.exports = mongoose.model('Potato', PotatoSchema);
