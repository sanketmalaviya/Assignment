const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
var bodyParser = require("body-parser")
const Port = process.env.port   || 9001
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL).then(()=>{
    console.log("DB connected ");
})




app.listen(Port,()=>{
    console.log("Server running in "+ Port);
})