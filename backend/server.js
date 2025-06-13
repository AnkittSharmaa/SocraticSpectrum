const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Result = require('./models/Result');
const Question = require('./models/Question');
const Philosopher = require('./models/Philosopher');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions', error: err });
  }
});

app.get('/philosophers', async (req, res) => {
  try {
    const philosophers = await Philosopher.find();
    res.json(philosophers);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching philosophers', error: err });
  }
});

app.post('/submit', async (req, res) => {
  try {
    const { answers } = req.body;
    const philosophers = await Philosopher.find();

    const scores = philosophers.map((philo) => {
      const similarity = cosineSimilarity(answers, philo.weights);
      return { name: philo.name, score: similarity };
    });

    const maxScore = Math.max(...scores.map(s => s.score));
    const results = scores.map(s => ({
      name: s.name,
      percent: Math.round((s.score / maxScore) * 100)
    }));

    const result = new Result({ answers, scores: results });
    await result.save();

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Error processing submission', error: err });
  }
});

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}

app.listen(5000, () => console.log('Server running on port 5000'));
