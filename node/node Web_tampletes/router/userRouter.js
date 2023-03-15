const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

router.get("/", (req, resp) => {
  resp.render("registration");
});

router.get("/login", (req, resp) => {
  resp.render("login");
});

router.post("/adduser", async (req, resp) => {
  try {
    const user = new User(req.body);
    const data = await user.save();
    resp.render("registration", { msg: "Registration success !!!!" });
  } catch (error) {}
});

router.post("/userlogin", async (req, resp) => {
  try {
    const useremail = req.body.email;
    const userpass = req.body.pass;

    const userdata = await User.findOne({ email: useremail });
    const valid = await bcrypt.compare(userpass, userdata.pass);
    if (valid) {
      const token = await jwt.sign({ _id: userdata.id }, process.env.Skey);
      resp.cookie("jwt", token);
      resp.render("home");
    } else {
      resp.render("404 not found");
    }
  } catch (error) {
    resp.render("error");
  }
});

router.get("/home", auth, (req, resp) => {
  resp.render("home");
});


module.exports = router;
