// const mongoose = require("mongoose");
// var url = "mongodb://localhost:27017/iBanking";

// mongoose.connect(url);

// mongoose.connection
//   .once("open", function () {
//     console.log("Ket noi ");
//   })
//   .on("error", function (error) {
//     console.log("error", error);
//   });

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

let result = MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  else console.log("Connected");
});

module.exports = result;
