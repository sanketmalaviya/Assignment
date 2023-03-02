const express = require("express")
const router = express.Router()
const User = require("../model/User")


router.get("/user",(req,resp)=>{
    User.find().then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})

router.post("/user",(req,resp)=>{
    const user = new User(req.body)
    user.save().then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})

module.exports = router
