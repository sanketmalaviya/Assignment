const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const Db_Url = "mongodb://127.0.0.1:27017"
const database = "online_shopping_App"

MongoClient.connect(Db_Url).then(result =>{
    console.log("db connected");
}).catch(err =>{
    console.log(err);
    
    const mydb = result.db(database)

   

    var pr1 = {name: "tv" ,price: 20000}
    var pr2 = {name: "mouse" ,price: 500}
    var pr3 = {name: "keybord" ,price: 800}
    var pr4 = {name: "fan" ,price: 2000}
    mydb.collection("Product").insertMany([pr1,pr2,pr3,pr4]).then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    })
})

    
    
