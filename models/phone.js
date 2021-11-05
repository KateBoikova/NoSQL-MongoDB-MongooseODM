const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const phoneSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    min: 2000,
    required: true,
  },
  memoryStorageCapacity: {
    type: Number,
    min: 32,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  screenSize: {
    type: Number,
    required: true,
  },
  NFC: {
    type: Boolean,
    required: true,
  },
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
