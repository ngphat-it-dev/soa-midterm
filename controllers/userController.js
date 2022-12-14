const mongoose = require("mongoose");
const userModel = require("../model/user.model");
const express = require("express");
const app = express();

let getData = (req, res) => {
  userModel.find({ userName: req.session.username }, function (err, data) {
    return res.render("user", { title: "iBanking", data: data[0] });
  });
};

let checkSession = (req, res, next) => {
  if (req.session.username) next();
  else res.render("index");
};

let checkSession2 = (req, res) => {
  if (req.session.username) return res.redirect("/");
  res.render("form", { title: "Login Form", layout: null });
};

let checkUser = (req, res) => {
  if (req.session.username) return res.redirect("/user/" + req.session.username);
  res.redirect("/");
};

let checkLogin = (req, res) => {
  userModel.find({ userName: req.body.username }, function (err, data) {
    if (err) {
      return res.send(err);
    } else {
      if (data == "") {
        return res.send(`<script>alert("INVALID USERNAME OR PASSWORD"); window.location.href = "/login"; </script>`);
      } else {
        if (req.body.username == data[0].userName && req.body.password == data[0].password) {
          req.session.username = req.body.username;
          return res.redirect("/");
        } else {
          return res.send(`<script>alert("INVALID USERNAME OR PASSWORD"); window.location.href = "/login"; </script>`);
        }
      }
    }
  });
};

let logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

let getPayment = (req, res,next) => {
   if (req.session.username) next();
   else res.redirect("/login");
};

let getPaymentData = (req, res) => {
  userModel.find({ userName: req.session.username }, function (err, data) {
    return res.render("payment", { title: "Payment" ,data: data[0] });
  });
};

let getJson =  (req,res) =>{
   userModel.findOne({ stuID: req.body.student_id }, function (err, data) {
   if (data) {
    return res.send(data)
      //  const isPaid = data?.isPaid;
      //  return res.json({ isPaid });
   } else {
    return res.status(200).json({code: 0, error: "Cannot found this student", error_code: 2})
   }
   });
}

let getOTP = (req, res) => {
    if (!req.session.username) 
    {
      res.redirect("/login");
    }else{
      res.render("otp");
   }
};
module.exports = { getData, checkSession, checkSession2, checkUser, checkLogin, logout, getPayment, getPaymentData, getJson,getOTP };
