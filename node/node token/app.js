const { json } = require("body-parser")
const express = require("express")
const app = express()
const port = 9002
const mongoose = require("mongoose")
app.use(express,json())
const DB_URL = "mongodb+srv://tops:tops@cluster0.md7ropa.mongodb.net/token?retryWrites=true&w=majority"
mongoose.connect(DB_URL).then(() =>{
    console.log("DB connected");
}).catch(error =>{
    console.log(error);
})

const userRouter = require("./router/userRouter")
app.use("/",userRouter)

app.listen(port,()=>{
    console.log("Server Running in "+ port);
})