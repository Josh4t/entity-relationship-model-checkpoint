const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  sportType: { type: String, required: true },
  schedule: { type: String, required: true },
  maxCapacity: { type: Number, default: 20 },
  gym: { type: mongoose.Schema.Types.ObjectId, ref: 'Gym' }
});

module.exports = mongoose.model('Session', sessionSchema);
