const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const url_DB = " mongodb://127.0.0.1:27017"
const database = "online_shopping_App"

MongoClient.connect(url_DB).then(result =>{
    console.log("databse connected");
}).catch(err =>{
    console.log(err);
})