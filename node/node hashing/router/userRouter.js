const express = require("express")
const router = express.Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs")

router.get("/user", async (req,resp)=>{
    try {
      const data = await User.find()
      resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.post("/user", async (req,resp)=>{
    try {
        const user = new User(req.body)
        const data = await user.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.post("/userlogin", async (req,resp)=>{
    try {
        const email = req.body.email
        const pass = req.body.pass
        const userdata = await User.findOne({email : email})
        const data = await bcrypt.compare(pass,userdata.pass)
        if(data){
            resp.send("WelCome "+ userdata.name)
        }
        else{
            resp.send("error  ")
        }
    } catch (error) {
        resp.send("404")
    }
   

})

module.exports = router