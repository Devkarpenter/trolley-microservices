const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  res.json({ message: "register works" });
};

exports.login = async (req, res) => {
  res.json({ message: "login works" });
};
