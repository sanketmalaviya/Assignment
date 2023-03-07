const jsonToken = require("jsonwebtoken")
const user = require("../model/User")

const auth = async (req,resp,next) =>{
 const token =req.header("auth-token")
 try {
    const data = await jsonToken.verify(token,"thisismyfirsttoken")
  
    if (data) {
        const userdata = await user.findOne({id: data._id})
         next();
    } else {
        resp.send("Invalid Data")
    }
 } catch (error) {
       resp.send("Invalid Data")   
 }
}

module.exports = auth