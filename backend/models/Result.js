const { Schema, model } = require('mongoose');

const ResultSchema = new Schema({
  answers: {
    type: [Number],
    required: true,
    validate: arr => arr.length === 20
  },
  scores: [{
    name: { type: String, required: true },
    percent: { type: Number, required: true }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Result', ResultSchema);
