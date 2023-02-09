const fs = require("fs")

const createFile = (data)=>{
    const data1 = JSON.stringify(data) 
     fs.writeFile("data.json",data1,(err)=>{
        if(err){
            console.log(err);
        }
          console.log("file created");
    })
}

const viewData = () =>{
    const data = viewData();
    console.log(data);
}

module.exports={createFile}