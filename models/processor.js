const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const processorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

const Processor = mongoose.model('Processor', processorSchema);

module.exports = Processor;
