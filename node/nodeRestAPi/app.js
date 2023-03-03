const express  = require("express")
const app = express();
port = 9001;

const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
app.use(express.json())
url_DB = "mongodb+srv://sanketmalaviya:project@cluster0.prb08rc.mongodb.net/project?retryWrites=true&w=majority"
mongoose.connect(url_DB).then(()=>{
    console.log("DB connected");
})
 
 const userRouter = require("./router/userRouter")
 const productRouter = require("./router/productRouter")
 app.use("/",userRouter)
 app.use("/",productRouter)

app.listen(port,() =>{
    console.log("server running "+ port );
})  