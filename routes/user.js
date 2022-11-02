var express = require("express");
const result = require("../model/connectDB");
var router = express.Router();

/* GET user page. */
router.get("/", function (req, res, next) {
  return res.send("USER PAGE");
});

router.get("/:username", function (req, res, next) {
  const username = req.params.username;
  res.send(username);
});

module.exports = router;
