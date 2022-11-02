var express = require("express");
const validate = require("../controllers/validateForm");
var router = express.Router();
bodyParser = require("body-parser");
const result = require("../model/connectDB");
var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "Login Form" });
});
router.post("/", (req, res, next) => {
  const userRoot = "admin";
  const pwdRoot = "admin";

  const userRoot1 = "admin1";
  const pwdRoot1 = "admin1";

  const { username, password } = req.body;

  if ((username === userRoot1 && password === pwdRoot1) || (username === userRoot && password === pwdRoot)) {
    // return res.redirect("/user");
    var passedVariable = req.body.username;
    return res.redirect("/user/" + passedVariable);
  } else {
    return res.send(`<script>alert("INVALID USERNAME OR PASSWORD"); window.location.href = "/login"; </script>`);
  }
});
module.exports = router;
