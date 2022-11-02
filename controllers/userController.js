const mongoose = require("mongoose");
const express = require("express");
const userModel = require("../model/user.model");
const app = express();

let getData = (req, res) => {
  userModel.find({ userName: req.params.username }, function (err, data) {
    return res.json(data);
  });
};

let checkSession = (req, res) => {
  if (req.session.username) return res.redirect("/user/" + req.session.username);
  res.render("index", { title: "IBanking" });
};

let checkSession2 = (req, res) => {
  if (req.session.username) return res.redirect("/user/" + req.session.username);
  res.render("form", { title: "Login Form" });
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
          var passedVariable = req.body.username;
          return res.redirect("/user/" + passedVariable);
        } else {
          return res.send(`<script>alert("INVALID USERNAME OR PASSWORD"); window.location.href = "/login"; </script>`);
        }
      }
    }
  });
};
module.exports = { getData, checkSession, checkSession2, checkUser, checkLogin };
