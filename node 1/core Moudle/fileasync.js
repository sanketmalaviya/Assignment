
const fs = require("fs");

// fs.mkdir("data",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//         console.log("folder created");
// })

// fs.writeFile("data/text.txt","Hello World",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//         console.log("created file");
// })

fs.unlink("data/text.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
        console.log("remove file");
})


fs.rmdir("data",(err,data)=>{
    if(err){
        console.log(err);
    }
        console.log("remove folder");
})