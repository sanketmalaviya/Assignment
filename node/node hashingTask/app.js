const express = require("express")
const app = express()
const port = 9004

app.use(express.json())

const mongoose = require("mongoose")
DB_URL = "mongodb+srv://sanketmalaviya:project@cluster0.prb08rc.mongodb.net/Task?retryWrites=true&w=majority"
mongoose.connect(DB_URL).then(()=>{
    console.log("DB Connected");
}).catch(err=>{
    console.log(err);
})


const userRouter = require("./router/userRouter")
app.use("/",userRouter)


app.listen(port, ()=>{
    console.log("Server "+ port + " Running");
})