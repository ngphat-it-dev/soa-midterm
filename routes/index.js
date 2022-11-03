var express = require("express");
const { checkSession, logout, checkLogin, getData } = require("../controllers/userController");
var router = express.Router();

/* GET home page. */
router.get("/", checkSession, getData);
router.get("/logout", logout);
module.exports = router;
