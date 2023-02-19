
const express = require("express")
const app = express();
const weather = require("./untill/weather")
const geocode= require("./untill/geocode")
const port = 9001;
const path = require("path")
const hbs = require("hbs")

const viewPath = path.join(__dirname,"./templet/view")
const partilsPath = path.join(__dirname,"./templet/partials")
const publicParth = path.join(__dirname,"./public")

app.set("view engine","hbs")
app.set("views",viewPath)
hbs.registerPartials(partilsPath)
app.use(express.static(publicParth))

app.get("/myweather",(req,resp)=>{
    resp.render("myweather")
})
app.get("/aboutus",(req,resp)=>{
    resp.render("aboutus")
})
app.get("/home",(req,resp)=>{
    resp.render("home")
})

app.get("/weather", (req, resp) => {

    const location= req.query.location
    geocode.getGeocode(location).then(result => {
        return weather.getWeather(result.lat, result.lng)
    }).then(data => {
        resp.send(data);
    }).catch(err => {
        console.log(err);
    })

})

app.listen(port,()=>{
    console.log("Server running in port " + port);
})