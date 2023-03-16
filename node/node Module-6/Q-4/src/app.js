const express = require("express");
const app = express();
const path = require("path")
const hbs = require("hbs")
require("dotenv").config();
const port = process.env.port;
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const mongoose = require("mongoose")
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL).then(()=>{
    console.log("DB connected");
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const publicPath = path.join(__dirname,"../public")
const viewPath = path.join(__dirname,"../templetes/view")
const partialpath = path.join(__dirname, "../templetes/partials")

app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialpath)
app.use(express.static(publicPath))




app.use("/",require("../router/userRouter"))

app.listen(port, () => {
  console.log("Server Running "+ port);
});
