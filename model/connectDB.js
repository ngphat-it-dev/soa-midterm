const mongoose = require("mongoose");
const express = require("express");
const app = express();
// Connecting to database
let connectDB = mongoose.connect(
  "mongodb://localhost:27017/",
  {
    dbName: "iBanking",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to iBanking database"))
);

exports.modules = connectDB;
