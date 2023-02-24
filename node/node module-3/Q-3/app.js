const express=require("express");
const app=express();

const path=require("path");

const port=9000;

app.listen(port,()=>{
    console.log(" server " + port + " running");
})
app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"));
})