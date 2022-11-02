var express = require("express");
const { checkSession } = require("../controllers/userController");
var router = express.Router();

/* GET home page. */
router.get("/", checkSession);

module.exports = router;
