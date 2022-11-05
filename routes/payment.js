var express = require("express");
const { getPayment, getPaymentData, getJson } = require("../controllers/userController");
var router = express.Router();

router.get("/", getPayment, getPaymentData);
router.post("/", getJson);

module.exports = router;
