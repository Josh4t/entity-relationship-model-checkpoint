const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  age: { type: Number, required: true },
  specialty: { type: String, required: true }
});

module.exports = mongoose.model('Coach', coachSchema);