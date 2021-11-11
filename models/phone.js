const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const db = require('../config/db');

const phoneSchema = new Schema(
  {
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
    screenSize: {
      type: Number,
      required: true,
    },
    NFC: {
      type: Boolean,
      required: true,
    },
    processorId: {
      type: Schema.Types.ObjectId,
      ref: 'Processor',
    },
  },
  {
    timestamps: true,
    version: false,
  }
);

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
