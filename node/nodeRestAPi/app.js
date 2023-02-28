const express = require("express")
const app = express();
const port = 9001;
const mongoose = require("mongoose")
app.use(express.json())
const urlDB = "mongodb+srv://sanketmalaviya:project@cluster0.prb08rc.mongodb.net/onlieShopping?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);


mongoose.connect(urlDB).then(() =>{
    console.log("db connected");
}).catch(err =>{
    console.log(err);
})     

const userSchema = new mongoose.Schema({ 
    uname:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    pass:{
        type:String
    },
    age:{
        type:Number
    },
    date:{
        type:Date,
        default: Date.now()
    }
})
const user = new mongoose.model("user",userSchema)
app.get("/users",(req,resp)=>{
    user.find().then(data =>{
        resp.send(data)
    }).catch(err =>{
        resp.send(err)
    })
})

app.post("/users",(req,resp)=>{
   const User = new user(req.body)
   User.save().then(result =>{
    
    resp.send(result)
    
   }).catch(err =>{
    resp.send(err)
   })
})

app.get("/users/:id",(req,resp)=>{
    const _id = req.params.id
    user.findById(_id).then(result =>{
        console.log(result);
        resp.send(result)
    }).catch(err =>{
        console.log(err);
        resp.send(err)
    })
})

app.put("/users/:id",(req,resp)=>{
    const _id = req.params.id
    user.findByIdAndUpdate(_id,req.body).then(result =>{
       resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})
app.delete("/users/:id",(req,resp)=>{
    const _id = req.params.id
    user.findByIdAndDelete(_id).then(resut =>{
        resp.send(result)
    }).catch(err =>{
        resp.send(err)
    })
})

app.listen(port,()=>{
    console.log("port running"+port);
})