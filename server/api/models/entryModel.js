'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema after mongoose
const entrySchema = new Schema({
  id: {
    type: String,
    required: 'The identifier'
  },
  message: {
    type: String,
    required: 'The message of some user'
  },
  reply: {
    type: [String],
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Entries', entrySchema);