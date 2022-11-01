var express = require("express");
const validate = require("../controllers/validateForm");
var router = express.Router();
bodyParser = require("body-parser");
var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "Login Form" });
});

router.post("/", (req, res, next) => {
  // const userRoot = "admin";
  // const pwdRoot = "admin";

  const userRoot1 = "admin1";
  const pwdRoot1 = "admin1";

  const { username, password } = req.body;

  if (username === userRoot1 && password === pwdRoot1) {
    console.log("Got body:", JSON.stringify(req.body));
    return res.send(JSON.stringify(req.body));
  } else {
    // cai error la fat send ma?
    return res.send("ERROR");
  }
});

module.exports = router;
