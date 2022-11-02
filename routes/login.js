const e = require("express");
var express = require("express");
const { checkSession, checkSession2, checkLogin } = require("../controllers/userController");
var router = express.Router();
bodyParser = require("body-parser");
const result = require("../model/connectDB");

var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* GET users listing. */
router.get("/", checkSession2);

router.post("/", checkLogin);
module.exports = router;
