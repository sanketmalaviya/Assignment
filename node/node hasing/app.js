const { json } = require("body-parser")
const express = require("express")
const app = express()
const port = 9003

app.use(express.json())

const mongoose = require("mongoose")
const { join } = require("path")
const DB_url = "mongodb+srv://sanketmalaviya:project@cluster0.prb08rc.mongodb.net/Demo?retryWrites=true&w=majority"
mongoose.connect(DB_url).then(()=>{
    console.log("DB connected");
})


const userRouter = require("./router/userRouter")
app.use("/",userRouter)



app.listen(port,()=>{
    console.log("Server running "+port);
})