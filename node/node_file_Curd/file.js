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

const viewFile = () =>{
    const data2 = viewData();
    console.log(data2);
}

const viewData = () =>{
    try {
        const data = fs.readFileSync("data.json","utf-8")
            if(data){
                return JSON.parse(data);
            }
            else{
                return [1];
            }
    } catch (error) {
        return [3] ;
    }
}

module.exports={createFile,viewFile}