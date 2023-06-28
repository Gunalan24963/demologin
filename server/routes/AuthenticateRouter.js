const express = require("express");
const router = express.Router();
const { Signup } = require("../models/Authentication");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body.formData;

  try {
    const Data = new Signup({ name: name, email: email, password: password });
    const response = await Data.save();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body.formData;
  const User = await Signup.findOne({
    email: email,
    password: password,
  });
  if (User) {
    const token = jwt.sign(
      {
        name: User.name,
        email: User.email,
      },
      "secret123"
    );
    console.log(token);
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "Invalid username or password" });
  }
});

router.put("/register/:id", async (req, res) => {
  const { name, email, password } = req.body.formData;

  try {
    const data = await Signup.findByIdAndUpdate(
      req.params.id,
      { name: name, email: email, password: password },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
