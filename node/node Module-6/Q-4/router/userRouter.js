const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const multer = require("multer");

// -------------------multer----------------------

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//--------------------------------------------

router.get("/", (req, resp) => {
  resp.render("registration");
});

router.post("/useradd", upload.single("file"), async (req, resp) => {
  try {
    const user = await User({
      name: req.body.name,
      email: req.body.email,
      pass: req.body.pass,
      img: req.file.filename,
    });
    const data = await user.save();
    console.log(data);
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
