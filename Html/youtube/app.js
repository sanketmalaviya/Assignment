const express = require("express")
const path = require("path")
const port = 9006;
const app = express();  

app.get("/youtube",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"youtube.html"))
})
app.get("/short",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"short.html"))
})
app.get("/subscriptions",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"subscriptions.html"))
})

app.listen(port,()=>{
    console.log("port start");
})