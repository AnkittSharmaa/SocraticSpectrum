// seedPhilosophers.js
require("dotenv").config();
const mongoose = require("mongoose");
const Philosopher = require("./models/Philosopher");

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("MongoDB connected");

    const philosophers = [
      {
        name: "Albert Camus",
        description:
          "Absurdist – believed life has no inherent meaning but we must rebel against that meaninglessness.",
        weights: [4, 3, 2, 5, 4, 4, 4, 4, 4, 4, 5, 3, 4, 4, 3, 3, 3, 3, 3, 5],
      },
      {
        name: "Friedrich Nietzsche",
        description:
          "Existentialist – emphasized individual will, power, and the creation of personal values.",
        weights: [5, 4, 5, 5, 4, 5, 5, 3, 5, 4, 5, 4, 4, 5, 3, 4, 4, 4, 4, 3],
      },
      {
        name: "Søren Kierkegaard",
        description:
          "Christian existentialist – emphasized faith, personal responsibility, and subjective truth.",
        weights: [3, 3, 3, 5, 3, 3, 5, 4, 2, 5, 4, 5, 4, 3, 4, 4, 3, 2, 3, 4],
      },
      {
        name: "Jean-Paul Sartre",
        description:
          "Existentialist – championed radical freedom and responsibility for meaning.",
        weights: [5, 4, 5, 5, 3, 3, 3, 5, 3, 5, 4, 5, 4, 5, 4, 3, 3, 4, 3, 5],
      },
      {
        name: "Immanuel Kant",
        description:
          "Deontologist – focused on duty, universal laws, and reason.",
        weights: [3, 3, 4, 3, 4, 3, 1, 1, 4, 3, 3, 5, 2, 1, 3, 4, 4, 1, 3, 4],
      },
      {
        name: "Plato",
        description:
          "Idealist – believed in a world of perfect forms and the role of reason.",
        weights: [3, 4, 3, 3, 4, 3, 4, 4, 2, 3, 3, 4, 3, 4, 2, 2, 3, 4, 2, 4],
      },
      {
        name: "Karl Marx",
        description:
          "Believed history is driven by class struggle and aimed for a classless society.",
        weights: [3, 4, 2, 2, 4, 2, 4, 3, 2, 3, 4, 2, 2, 3, 5, 2, 2, 4, 4, 4],
      },
      {
        name: "Gautama Buddha",
        description:
          "Eastern philosopher – taught detachment, compassion, and transcendence of suffering.",
        weights: [2, 3, 3, 4, 2, 3, 2, 4, 3, 3, 2, 3, 4, 5, 3, 2, 3, 2, 4, 3],
      },
      {
        name: "Confucius",
        description:
          "Stressed harmony, virtue, and order in society based on relationships.",
        weights: [3, 3, 4, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 5, 2, 5, 3, 5, 3, 3],
      },
      {
        name: "Adi Shankaracharya",
        description:
          "Indian Vedanta philosopher – emphasized non-duality and the illusory nature of the world.",
        weights: [3, 2, 3, 4, 4, 5, 4, 5, 2, 4, 3, 4, 4, 2, 3, 3, 4, 4, 3, 4],
      },
      {
        name: "Guru Nanak",
        description:
          "Founder of Sikhism – emphasized devotion, equality, and remembrance of God.",
        weights: [4, 3, 3, 2, 4, 3, 5, 4, 4, 5, 3, 3, 5, 4, 4, 3, 2, 2, 5, 3],
      },
      {
        name: "Fyodor Dostoevsky",
        description:
          "Explored themes of suffering, faith, and morality in human psychology.",
        weights: [4, 4, 4, 5, 4, 4, 3, 4, 4, 5, 3, 4, 4, 4, 4, 4, 3, 4, 4, 5],
      },
      {
        name: "Franz Kafka",
        description:
          "Explored alienation, bureaucracy, and the absurdity of life.",
        weights: [4, 4, 3, 4, 4, 3, 4, 3, 2, 4, 4, 2, 3, 3, 4, 4, 3, 2, 4, 5],
      },
      {
        name: "Georg Wilhelm Friedrich Hegel",
        description:
          "Dialectical idealist – focused on the evolution of consciousness and history through conflict.",
        weights: [5, 3, 5, 3, 4, 3, 4, 4, 3, 4, 3, 3, 2, 3, 5, 3, 5, 4, 3, 3],
      },
      {
        name: "Islamic Philosophy",
        description:
          "Combines reason with divine revelation – major themes include justice, ethics, and unity of existence.",
        weights: [4, 1, 3, 2, 2, 4, 4, 2, 4, 5, 4, 3, 3, 3, 2, 2, 4, 4, 4, 2],
      },
    ];

    await Philosopher.deleteMany({});
    await Philosopher.insertMany(philosophers);
    console.log("Philosophers seeded!");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
