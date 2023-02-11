

const yargs = require("yargs")
const file1 = require("./file")


yargs.command({
    command : "create",
    
    builder :  {
            name: {
                type : String
             },
             email:{
                type : String
            }
            // date: {
            //     type : Date,
            //     default: new date()
            // }
            
       
    },
  
    handler: function(argv){
        
    const data = {
        name:  argv.name,
        email: argv.email
        // date:  argv.date
    }
    file1.createFile(data);
    }

})

    
yargs.command({
    command : "view" , 
    handler: function(argv){
       file1.viewFile()
    }
})

yargs.argv