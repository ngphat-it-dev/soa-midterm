var express = require("express");
const { checkUser, getData } = require("../controllers/userController");
const result = require("../model/connectDB");
const userModel = require("../model/user.model");
var router = express.Router();

/* GET user page. */
router.get("/", checkUser);
router.get("/:username", getData);

// router.post("/test", getData);

module.exports = router;
