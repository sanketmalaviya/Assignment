const express = require("express");
const path = require("path");
const app = express()

const port = 9002;

app.listen(port, ()=>{
    console.log("server reunning "+ port);
})

app.get("/sony",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"sony.html"))
})