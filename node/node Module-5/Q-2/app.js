const express = require("express")
const app = express()
const port = 9002
const  mongoose = require("mongoose")
DB_URL = "mongodb+srv://sanketmalaviya:project@cluster0.prb08rc.mongodb.net/online_shopping_App?retryWrites=true&w=majority"
app.use(express.json())
mongoose.connect(DB_URL).then(result =>{
    console.log("DB conncected");
}).catch(err =>{
    console.log();
})

const userRouter = require("./router/UserRouter")
app.use("/",userRouter)

app.listen(port,()=>{
    console.log("Server running "+port);
})
