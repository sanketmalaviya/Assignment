const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = new  mongoose.Schema({
    name: {
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now()
    }
})


userSchema.pre("save", async function(){
        try {
            if(this.isModified = "pass")
           this.pass =  await bcrypt.hash(this.pass,10)
        } catch (error) {
            
        }
})

module.exports = new mongoose.model("User",userSchema)
