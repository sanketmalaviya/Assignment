const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.get("/", (req, resp) => {
  resp.render("registration");
});

router.post("/useradd", async (req, resp) => {
  try {
    const user = new User(req.body);
    const data = await user.save();
    resp.render("registration", { msg: "Registration success!!!" });
  } catch (error) {
    resp.render("registration", { fail: "First Registration" });
  }
});

router.get("/login", (req, resp) => {
  resp.render("login");
});

router.post("/userlogin", async (req, resp) => {
  try {
    const useremail = req.body.email;
    const userpass = req.body.pass;

    const userdata = await User.findOne({ email: useremail });
    const valid = await bcrypt.compare(userpass, userdata.pass);
    const alldata = await User.find();
    if (valid) {
      const token = await jwt.sign({ _id: userdata._id }, process.env.Skey);
      resp.cookie("jwt", token);
      resp.render("home", { udata: alldata });
    } else {
      resp.render("login", { err: "login unsuccess!!!" });
    }
  } catch (error) {
    resp.render("login", { err: "login unsuccess!!!" });
  }
});

router.get("/home", auth, async (req, resp) => {
  try {
    const userdata = await User.find();
    resp.render("home", { udata: userdata });
  } catch (error) {}
});

router.get("/logout", (req, resp) => {
  resp.clearCookie("jwt");
  resp.render("login");
});

module.exports = router;
