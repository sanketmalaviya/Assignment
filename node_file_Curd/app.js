

// const yargs = require("yargs");

// yargs.command({

//     command: "add",
//     builder: {
//         name: {
//             type : string
//         },
//         email: {
//             type : string
//         }
//     },
//     handler : function(argv) {
//         console.log(argv.name+" "+argv.email);
//     }
// })

// yargs.argv



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


yargs.argv