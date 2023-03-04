const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
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

userSchema.pre("save", async function(){
    try {
        if(this.isModified = "pass")
        this.pass = await bcrypt.hash(this.pass,10)
    } catch (error) {
        
    }
})

const user = new mongoose.model("user",userSchema)

module.exports = user
