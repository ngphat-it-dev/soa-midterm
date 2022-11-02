const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  userName: String,
  gmail: String,
  fullName: String,
  phoneNumber: String,
  numberBalance: String,
  transactionHistory: Object,
  OTP: String,
  password: String,
});
const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;