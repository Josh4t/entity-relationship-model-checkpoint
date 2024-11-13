const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  uniqueIdentifier: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  address: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true }
});

module.exports = mongoose.model('Member', memberSchema);
