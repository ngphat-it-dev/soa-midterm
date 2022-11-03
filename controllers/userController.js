const mongoose = require("mongoose");
const express = require("express");
const userModel = require("../model/user.model");
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
module.exports = { getData, checkSession, checkSession2, checkUser, checkLogin, logout };
