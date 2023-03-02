const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    uname: {
        type:String
    },
    email:{
        type:String
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

module.exports = user
