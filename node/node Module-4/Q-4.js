const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const Db_Url = "mongodb://127.0.0.1:27017"
const database = "online_shopping_App"

MongoClient.connect(Db_Url).then(result =>{
    console.log("database connected");
    const myDB = result.db(database);
  
    myDB.createCollection("user").then(result =>{
        console.log("collection created");
    }).catch(err =>{
        console.log(err);
    })
    myDB.createCollection("Product category").then(result =>{
        console.log("collection created");
    }).catch(err =>{
        console.log(err);
    })

    myDB.createCollection("Product").then(result =>{
        console.log("collection created");
    }).catch(err =>{
        console.log(err);
    })

    myDB.createCollection("Order").then(result =>{
        console.log("collection created");
    }).catch(err =>{
        console.log(err);
    })

    myDB.createCollection("Review").then(result =>{
        console.log("collection created");
    }).catch(err =>{
        console.log(err);
    })
}).catch(err =>{
        console.log(err);
    })