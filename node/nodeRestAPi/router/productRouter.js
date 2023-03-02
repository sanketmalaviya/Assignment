const express = require("express")
const router = express.Router()
const product = require("../model/Product")


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

module.exports = router