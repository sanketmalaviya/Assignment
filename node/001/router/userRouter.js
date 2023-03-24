const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const auth = require("../middelware/auth")

router.get("/user",auth, async (req, resp) => {
  try {
    const data = await User.find();
    resp.send(data);
  } catch (error) {}
});

router.post("/user", async (req, resp) => {
  try {
    const user = new User(req.body);
    const validData = await user.save();
    resp.send(validData);
  } catch (error) {
    console.log(error);
  }
});

router.get("/user/:id", async (req, resp) => {
  try {
    const _id = req.params.id;
    const data = await User.findById(_id);
    resp.send(data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/userlogin", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const userdata = await User.findOne({ email: email });
    const valid = await bcrypt.compare(pass, userdata.pass);
    if (valid) {
      const token = await jwt.sign(
        { _id: userdata._id },
        "thisismyjsonwebtoken"
      );
      resp.send("Token " + token);
    } else {
      resp.send("err");
    }
  } catch (error) {
    console.log("error");
  }
});

module.exports = router;
