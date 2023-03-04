const bcrypt = require("bcryptjs")

const mypass = async (pass)=>{
      const bpass = await bcrypt.hash(pass,10)
    //   console.log(bpass);

   const valid = await bcrypt.compare("sanket124",bpass)
            console.log(valid);

}

mypass("sanket124")