const express = require("express")
const router = express.Router()
const User = require("../model/user")
router.get("/", (req, resp) => {
    resp.render("registration")
})

router.post("/adduser", async (req,resp)=> {
    try {
        const user = new User(req.body)
        const data = await user.save();
        resp.render("registration", { msg: "Registration success !!!!" })
    } catch (error) {
        
    }
})
module.exports = router