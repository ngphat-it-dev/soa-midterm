var express = require("express");
const { getPayment, getPaymentData } = require("../controllers/userController");
var router = express.Router();

router.get("/", getPayment, getPaymentData);

module.exports = router;
