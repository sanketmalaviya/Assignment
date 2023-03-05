const express = require("express")
const router = express.Router()
const User = require("../model/User")
const brcypt = require("bcryptjs")
router.get("/user", async(req,resp) =>{
    try {
        const data = await User.find()
        resp.send(data);
    } catch (error) {
        resp.send(error)
    }
})

router.post("/user", async(req,resp)=>{
    try {
        const user = new User(req.body)
          const data = await user.save()
            resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})
router.delete("/user/:id", async(req,resp)=>{
    const _id = req.params.id
    try {
       
        const user = await User.findByIdAndDelete(_id)
            resp.send(user)
    } catch (error) {
        resp.send(error)
    }
})


router.post("/userlogin", async (req,resp)=>{
      try {
        const name = req.body.name
        const pass = req.body.pass
        const userdata =  await User.findOne({name:name})
        const userpass = await brcypt.compare(pass,userdata)
        if (userpass) {
            resp.send("WELCOME"+ userdata.name)
        } else {
            resp.send("USER NOT FOUND !!!")
        }
      } catch (error) {
        resp.send("ERROR 404")
      }
})

module.exports = router