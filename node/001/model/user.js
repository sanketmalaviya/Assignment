const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    date:{
        type:Date,
        defult:Date.now()
    }
})
try {
    userSchema.pre("save", async function(){
        if(this.isModified = "pass")
        this.pass = await bcrypt.hash(this.pass,10)
 })
} catch (error) {
    
}



module.exports = new mongoose.model("user",userSchema)