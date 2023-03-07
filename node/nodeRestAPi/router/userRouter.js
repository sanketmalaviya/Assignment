const express = require("express")
const router = express.Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs")
const jsonToken = require("jsonwebtoken")
const auth = require("../middelware/auth")

router.get("/user",auth,(req,resp)=>{
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


router.put("/user/:id",(req,resp)=>{
    const _id = req.params.id
    const user = new User(_id,req.body)
    user.save().then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})

router.post("/userlogin", async (req,resp)=>{
     try {
        const email = req.body.email;
        const pass = req.body.pass;

        const userdata = await User.findOne({email:email})

        const valid = await bcrypt.compare(pass, userdata.pass)

        if (valid) {
            const token = await jsonToken.sign({_id: userdata._id},"thisismyfirsttoken")
            resp.send("auth-token :" + token)
            resp.send("," + userdata.uname)
        }
        else{
           
            resp.send("403")
        }
     } catch (error) {
        console.log("error");
        resp.send("404")
     }
})






module.exports = router
