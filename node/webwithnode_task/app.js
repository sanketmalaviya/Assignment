
const express = require("express")
const app = express();
const port = 9006;
const path = require("path")
const hbs = require("hbs")
const parth = require("path") 

 const viewPath = path.join(__dirname,"./templete/view")
 const partialsPath = path.join(__dirname,"./templete/partials")
 app.set("view engine",hbs)
hbs.registerPartials(partialsPath)

app.get("/home",(req,resp)=>{
    resp.render("home")
})
app.get("/aboutus",(req,resp)=>{
    resp.render("aboutus")
})
app.get("/contactus",(req,resp)=>{
    resp.render("contactus")
})

app.listen(port,()=>{
    console.log("server 9006 is running...");
})


app.get("/login",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"login.html"))
})
app.get("/home",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"))
})
app.get("/forgot_password",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"forgot_password.html"))
})
app.get("/register",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"register.html"))
})
app.get("/aboutus",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"aboutus.html"))
})
app.get("/contactus",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"contactus.html"))
})
