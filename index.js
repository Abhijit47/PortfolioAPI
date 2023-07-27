// index.js
const express = require('express');
const mongoose = require('mongoose');
const { MONGOURI, MONGOPASSWORD } = require('./keys');
const app = express();
app.use(express.json());
const PORT = 4000;

const MONGO_URL = MONGOURI;
const MONGO_PASSWORD = MONGOPASSWORD;

// connect with mongodb
const DB = MONGO_URL.replace("<password>", MONGO_PASSWORD);

mongoose.connect(DB)
  .then(() => {
    console.log("Connction successful with DB");
  }).catch((err) => {
    console.log("Something went wrong in connection");
  });

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.get('/about', (req, res) => {
  res.send('This is my about route..... ');
});

// Export the Express API
module.exports = app;