const mongoose=require("mongoose")

const urlDB ="mongodb://127.0.0.1:27017/student"
mongoose.set('strictQuery', true);

mongoose.connect(urlDB).then(()=>{
    console.log("db connected");
}).catch(err =>{
    console.log(err);
})

const studentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    rollNo:{
        type:Number
    },
    dept:{
        type:String
    },
    phonrNO:{
        type:Number
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

const Student = new mongoose.model("studentData",studentSchema)

const studentAdd = ()=>{
    const student = new Student({name: "sanket", rollNo: 1, dept: "nodejs", phoneNo: 9087654321});
    student.save().then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    })
}


const studentMany = ()=>{
    const st1= Student({
        name: "jaydeep" , rollNo: 2, dept: "php" , phoneNo: 9807654321
    });
    const st2= Student({
        name: "jay" , rollNo: 3, dept:".net" , phonrNo:1234567890
    });
    const st3= Student({
        name: "vivek" , rollNo: 4, dept:"java" , phoneNO:3214567890
    });
    const st4= Student({
        name: "rutvik" , rollNo: 5, dept:"php" , phoneNO:4567890321
    });

    Student.insertMany([st1,st2,st3,st4]).then(result =>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

const studentFind = ()=>{
    Student.find({dept:"php"}).then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    })
}

const studentUpdate = ()=>{
    Student.updateOne({name: "jaydeep"},{dept:"nodejs"}).then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    })
}

const studentUpdateMany = ()=>{
    Student.updateMany({dept: "nodejs"} , {dept:"node"}).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}








// studentAdd();
// studentMany()
// studentFind();
// studentUpdate()
studentUpdateMany()