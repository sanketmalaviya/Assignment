const jwt = require("jsonwebtoken");
const User = require("../model/user");

const auth = async (req, resp, next) => {
  const token = req.header("auth-token");

  try {
    const data = await jwt.verify(token, "thisismyjsonwebtoken");
    if (data) {
      const userdata = await User.findOne({ _id: data._id });
      req.user = userdata;
      next();
    } else {
      resp.send("Invalid Token");
    }
  } catch (error) {
    resp.send("error");
  }
};


module.exports = auth