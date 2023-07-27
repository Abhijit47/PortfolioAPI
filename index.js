// Add Express
const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// configure dotenv
// dotenv.config({ path: './config.env' });

// static variable
// const MONGO_URL = process.env.DATABASE_URI;
// const MONGO_PASSWORD = process.env.DATABASE_PASSWORD;
const PORT = process.env.PORT || 5000;

// connect with mongodb
// const DB = MONGO_URL.replace("<password>", MONGO_PASSWORD);

// mongoose.connect(DB)
//   .then(() => {
//     console.log("Connction successful with DB");
//   }).catch((err) => {
//     console.log("Something went wrong in connection");
//   });


// Create GET request
app.get("/api", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(200).json({ message: "Express app on vercel." });
});

// Initialize server
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`);
});

// Export the Express API
module.exports = app;