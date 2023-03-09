const express = require("express")
const router = express.Router()
const product = require("../model/Product")
const Cart = require("../model/cart")
const auth = require("../middelware/auth")

router.get("/users",(req,resp)=>{
    product.find().then(result =>{
        resp.send(result)
    }).catch(err=>{
        resp.send(err)
    })
})

router.post("/users",(req,resp)=>{
    const prod = new product(req.body)
    prod.save().then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})

router.post("/addcart", auth , async (req,resp) =>{
    const user = req.user
    try {
        const cart = new Cart({uid: user._id, pid: req.body.pid, qty: req.body.qty})
        const cdata = await cart.save()
        resp.send("product added into Cart.........")
    } catch (error) {
        resp.send(error)    
    }
})

module.exports = router