const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const Db_Url = "mongodb://127.0.0.1:27017"
const database = "online_shopping_App"

MongoClient.connect(Db_Url).then(result =>{
    console.log("database connected");
}).catch(err =>{
        console.log(err);
    })

