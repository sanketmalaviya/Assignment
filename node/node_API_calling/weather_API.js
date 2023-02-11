const axios = require("axios")

 const url ="https://api.openweathermap.org/data/2.5/weather?lat=21.170240&lon=72.831062&appid=dee1453ce9972e4b53e8058399a68e05"

axios.get(url).then(result=>{
    
        console.log(result.data.name);
    
}).catch(err=>{
    console.log(err);
})