var express = require("express");
const validate = require("../controllers/validateForm");
var router = express.Router();
bodyParser = require("body-parser");
var app = express();
let alert = require("alert");

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
    return res.send(JSON.stringify(req.body));
  } else {
    return res.send(`<script>alert("INVALID USERNAME OR PASSWORD"); window.location.href = "/login"; </script>`);
  }
});

module.exports = router;
