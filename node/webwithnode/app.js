const express = require("express")
const app = express();
const port = 9005;
const path  = require("path")

app.get("/",(req,resp)=>{
        resp.sendFile("Mian req. calling")
}) 
app.get("/main",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"main.html"))
})
app.get("/signIn",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"signIn.html"))
}) 
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"about.html"))
}) 
app.get("/contact",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"contact.html"))
})
app.get("/signinSubmit",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"signinSubmit.html"))
})
app.get("/*",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"error.html"))
})

app.listen(port,()=>{
    console.log("Server is running");
})

