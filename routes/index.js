var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "IBanking" });
});

router.get("/user/:username", function (req, res, next) {
  const username = req.params.username;
  res.send(username);
});

module.exports = router;
