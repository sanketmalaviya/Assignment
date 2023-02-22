const express = require("express")
const app = express();
const weather = require("./untill/weather")
const geocode = require("./untill/geocode")
const port = 9001;
const path = require("path")
const hbs = require("hbs")

const pathview = path.join(__dirname,"./templete/view")
const pathpartial = path.join(__dirname,"/templete/partial")
const pathpublic = path.join(__dirname,"/public")

app.set("view engine","hbs")
app.set("views",pathview)
hbs.registerPartials(pathpartial)
app.use(express.static(pathpublic))


app.get("/",(req,resp) =>{
    resp.render("home")
})

app.get("/aboutus",(req,resp) =>{
    resp.render("aboutus")
})
app.get("/myweather",(req,resp) =>{
    resp.render("myweather")
})

app.get("/weather",(req,resp)=>{
    const location = req.query.location
    geocode.getGeocode(location).then(result =>{
        return weather.getWeather(result.lat, result.lng)
    }).then(data =>{
        console.log(data);
    }).catch(err =>{
        console.log(err);
    })
})


app.listen(port,()=>{
    console.log("PORT 9001 is running");
})