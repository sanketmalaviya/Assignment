
const fs = require("fs")

const data = fs.readFileSync("node/file/text.txt","utf-8");
console.log(data);
console.log("file call using sync way");

fs.readFile("node/file/text.txt",(err,data)=>{
    console.log(data.toString());
})

console.log("file call using async way");
