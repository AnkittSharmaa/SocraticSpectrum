const { Schema, model } = require('mongoose');

const PhilosopherSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  weights: {
    type: [Number],
    required: true,
    validate: arr => arr.length === 20 // ensure alignment with 20 questions
  }
});

module.exports = model('Philosopher', PhilosopherSchema);
