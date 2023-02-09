

const yargs = require("yargs")
const file1 = require("./file")


yargs.command({
    command : "create",
    
    builder :  {
            name: {
                type : String
        },
            email: {
                type : String
            }
       
    },
  
    handler: function(argv){
        
    const data = {
        name:  argv.name,
        email: argv.email
    }
    file1.createFile(data);
    }

})

    
yargs.command({
    command : "view" ,
    handler: function(argv){
       file1.viewData(argv)
    }
})

yargs.argv