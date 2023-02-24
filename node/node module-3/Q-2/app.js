
const express = require("express")
const app = express()
const port = 9001;


app.listen(port,()=>{
    console.log("server " +port+ " running");
})

app.get("/",(req,resp)=>{
    resp.send("WEL COME")
})