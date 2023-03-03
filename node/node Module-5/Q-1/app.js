const express = require("express")
const app = express()
const port = 9000;
const mongoose = require("mongoose")
const db_Url = "mongodb://127.0.0.1:27017/Task_Mang"
app.use(express.json())
mongoose.connect(db_Url).then(() =>{
    console.log("DB_connected");
}).catch(err =>{
    console.log(err);
})

const taskSchema = new mongoose.Schema({
    name:{
        type : String
    },
    email:{
        type: String
    },
    phoneNo:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const Task = new mongoose.model("Task",taskSchema)

app.get("/task",(req,resp)=>{
    Task.find().then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})


app.post("/task",(req,resp)=>{
    const task = new Task(req.body)
    task.save().then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})


app.get("/task/:id",(req,resp)=>{
    const _id = req.params.id
    Task.findById(_id).then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})


app.put("/task/:id",(req,resp)=>{
    const _id = req.params.id
    Task.findByIdAndUpdate(_id,req.body).then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})

app.patch("/task/:id",(req,resp)=>{
    const _id = req.params.id
    Task.findByIdAndUpdate(_id,req.body).then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})

app.delete("/task/:id",(req,resp)=>{
    const _id = req.params.id
    Task.findByIdAndDelete(_id).then(result =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})

app.listen(port,()=>{
    console.log("Port Server "+ port)
})