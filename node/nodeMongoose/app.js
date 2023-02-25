const mongoose = require("mongoose")
const db_url = "mongodb://127.0.0.1:27017/student"
mongoose.set('strictQuery', true);


mongoose.connect(db_url).then(()=>{
    console.log("DB connected");
}).catch(err =>{
    console.log(err);
})


const userSchema = new mongoose.Schema({
    uname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        unique: true
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

const User = new mongoose.model("user",userSchema)

const adduser = ()=>{
    const user = new User({uname: "sanket", email: "sanket@gmail.com", pass:"sanket123", age:22});
    user.save().then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    })
}

const manyuser = ()=>{
    const user1 = new User({uname: "jaydeep" , email: "jaydeep@gmil.com" , pass:"jaydeep123", age:23});
    const user2 = new User({uname: "jay" , email: "jay@gmil.com" , pass:"jay123", age:21});
    const user3 = new User({uname: "rutvik" , email: "rutvik@gmil.com" , pass:"rutvik123", age:24});
    
    User.insertMany([user1,user2,user3]).then(result=>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
})
}

const viewUser = ()=>{
    User.find().then(result =>{
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
}

const updateUser = ()=> {
    User.updateOne({uname: "sanket"}, {pass: "test123"}).then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    })
}

//  adduser();
// manyuser();
// viewUser();
updateUser();
