// seedQuestions.js
require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('./models/Question');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const questions = [
  "Do you believe in free will?",
  "Should morality be universal or personal?",
  "Is suffering essential to personal growth?",
  "Does life have an inherent meaning?",
  "Should logic outweigh emotions in decision-making?",
  "Can emotions be trusted in making decisions?",
  "Do you believe in a predetermined destiny?",
  "Is belief in a higher power necessary for a meaningful life?",
  "Is art a reflection of truth or imagination?",
  "Should honesty always be prioritized?",
  "Is the pursuit of personal happiness the ultimate goal?",
  "Can a person be moral without religion?",
  "Is existence more important than essence?",
  "Are humans inherently good or evil?",
  "Is beauty objective or subjective?",
  "Should individual freedom outweigh the collective good?",
  "Is death the end of our existence?",
  "Do material possessions bring lasting happiness?",
  "Is peace more valuable than justice?",
  "Should life be driven more by passion or reason?"
];

const seed = async () => {
  try {
    await Question.deleteMany({});
    await Question.insertMany(questions.map(text => ({ text })));
    console.log('Questions seeded successfully.');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seed();
