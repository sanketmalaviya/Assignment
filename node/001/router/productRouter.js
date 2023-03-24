const express = require("express")
const router = express.Router()
const Product = require("../model/product")


router.get("/product", async (req,resp)=>{
    try {
       const data= await Product.find()
       resp.send(data)
    } catch (error) {
        resp.send("error")
    }
})


router.post("/product", async (req,resp)=>{
    try {
         const pro = new Product(req.body)
         const data = pro.save()
         resp.send(data)
    } catch (error) {
        resp.send("error")
    }
})

module.exports = router