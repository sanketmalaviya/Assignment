
const yargs = require("yargs")
const fs = require("fs")
const path = require("path")



// yargs.command({
//     command: "add",
//     builder:{
//         name:{
//             type:String
//         },
//         email:{
//             email:String
//         },
//         phoneNo:{
//             phoneNo:Number
//         }
//     },
//     handler:function(argv){
//         fs.writeFileSync("text.txt","Hello World")
//         console.log("data Inserted");
//     }
// })

// yargs.argv

yargs.command({
    command:"view",
    handler:function(argv){
        const dt= fs.readFileSync("text.txt","utf-8")
        console.log(dt);
    }

})

yargs.argv