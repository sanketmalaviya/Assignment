const express = require("express")
const router = express.Router()
const User = require("../model/user")
// const bcrypt = require("bcryptjs")

router.post("/user", async(req,resp)=>{
    try {
        const user =  User(req.body)
        const data = await user.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

module.exports = User