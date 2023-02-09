const fs = require("fs")

const createFile = (data)=>{
    // const data1 = JSON.stringify(data) 
     fs.writeFile("data.txt",data,(err)=>{
        if(err){
            console.log(err);
        }
          console.log("file created");
    })
}

module.exports={createFile}