const axois = require("axios")

const getWeather = (lat,lon,callback) =>{



const  url = `https://api.openweathermap.org/data/2.5/weather?lat=21.1702&lon=72.8311&units=metric&appid=127d880d7784727f24c339fc6862b782`

axois.get(url).then(result =>{
    const dt = result.data.main
    
    const temp = dt.temp;
    const pressure = dt.pressure;
    const humidity = dt.humidity;
    const city = result.data.name;
    
    callback({
        temp,pressure,humidity,city
    })
  
    
}).catch(err =>{
    callback(undefined,err)
})
}

module.exports = {getWeather}