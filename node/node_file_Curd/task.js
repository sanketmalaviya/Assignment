

const fs = require("fs")
const yargs = require("yargs");

yargs.command({

    command: "add",
   
    handler : fs.mkdir("node_file_Curd/data", (err, data) => {
          if (err) {
              console.log(err);
            return;
          }
           console.log("folder created...");
       })
})

yargs.command({

  command: "add",
 
  handler : fs.writeFile("node_file_Curd/data/text.txt","Hello World", (err, data) => {
        if (err) {
            console.log(err);
          return;
        }
         console.log("file created...");
     })
})

// yargs.command({
  
//    command: "remove",

//    handler : fs.rmdir("node_file_Curd/data", (err, data) => {
//       if (err) {
//         console.log(err);
//        return;
//       }
//         console.log("remove folder...");
//       })
// })

// yargs.command({
  
//   command: "remove",

//   handler : fs.unlink("node_file_Curd/data/text.txt", (err, data) => {
//      if (err) {
//        console.log(err);
//       return;
//      }
//        console.log("remove file...");
//      })
// })

yargs.argv