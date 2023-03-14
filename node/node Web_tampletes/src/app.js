const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const hbs = require("hbs")
var bodyParser = require('body-parser') 
require("dotenv").config()
const port = process.env.port 
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL).then(()=>{
    console.log("DB Connected ");
})

app.use(bodyParser.urlencoded({ extended: false }))



const publicpath = path.join(__dirname,"../public")
const viewpath = path.join(__dirname,"../templetes/view")
const partialpath = path.join(__dirname, "../templetes/partials")

app.set("view engine", "hbs")
app.set("views", viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(publicpath))

app.use("/",require("../router/userRouter"))





app.listen(port,()=>{
    console.log("Server running on "+ port);
})