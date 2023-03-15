const jwt = require("jsonwebtoken");
const User = require("../model/user");

const auth = async (req, resp, next) => {
  const token = req.cookies.jwt;
  try {
    const data = await jwt.verify(token, process.env.Skey);
    if (data) {
      const userdata = await User.findOne({ _id: data._id });
      req.user = userdata;
      next();
    } else { 
      resp.render("login",{err:"please login"})
    }
  } catch (error) {
    resp.send("Invalid Token")
  }
};
