const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    pass: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now()
    },
    img:{
        type:String
    }
})

userSchema.pre("save", async function(next){
        try {
            if(this.isModified("pass"))
            this.pass = await bcrypt.hash(this.pass,10)
        } catch (error) {
            console.log(error);           
        }
})
module.exports = new mongoose.model("User",userSchema)