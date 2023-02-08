

const yargs = require("yargs");

yargs.command({

    command: "add",
    builder: {
        name: {
            type : string
        },
        email: {
            type : string
        }
    },
    handler : function(argv) {
        console.log(argv.name+" "+argv.email);
    }
})

yargs.argv