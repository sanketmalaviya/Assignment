const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const Db_Url = "mongodb://127.0.0.1:27017"
const database = "student"

MongoClient.connect(Db_Url).then(result =>{
    // console.log("db connected");
    const myDb = result.db(database);

    // myDb.createCollection("emp").then(data =>{
    //     console.log("collection created");
    // }).catch(err =>{
    //     console.log(err);
    // }).catch(err =>{
        // console.log(err);
    // })



    //     myDb.collection("emp").insertOne({
//         name: "sanket",
//         email: "sanket@gmail.com"
//     }).then(result => {
//         console.log("data Inserted");
//     })
// }).catch(err =>{
//     console.log(err);
// })


// var e1 = {name: "rahul" , email:"rahul@gmail.com",dep:"node"}
// var e2 = {name: "jaydeep" , email:"jaydeep@gmail.com",dep:"java"}
// var e3 = {name: "vivek" , email:"vivek@gmail.com",dep:"node"}
// var e4 = {name: "jay" , email:"jay@gmail.com",dep:".net"}
// myDb.collection("emp").insertMany([e1,e2,e3,e4]).then(result =>{
//    console.log(result);
// }).catch(err =>{
//     console.log(err);
// })


// myDb.collection("emp").updateOne({name:"sanket"},{$set:{dep:"php"}}).then(result =>{
//     console.log(result);
// }).catch(err =>{
//     console.log(err);
// })



// myDb.collection("emp").deleteOne({dep:".net"}).then(result =>{
//     console.log(result);
// }).catch(err=>{
//      console.log(err);
// })


// myDb.collection("emp").find({sal:{$eq:5000}}).toArray().then(result =>{
//     console.log(result);
// }).catch(err =>{
//     console.log(err);
// })

// myDb.collection("emp").find({sal:{$ne:5000}}).toArray().then(result =>{
//     console.log(result);
// }).catch(err =>{
//     console.log(err);
// })

// myDb.collection("emp").find({$and: [{dep:{$eq: "node"}} , {sal: {$gt: 5000}}] }).toArray().then(result =>{
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

// myDb.collection("emp").find({$or: [{dep: {$eq: "node"}} , {sal: {gt: 5000}} ]}).toArray().then(result =>{
//     console.log(result);
// }).catch(err =>{
//     console.log(err);
// })

myDb.collection("emp").find({$nor: [{dep: {$eq: "node"}} , {sal: {gt: 5000}} ]}).toArray().then(result =>{
    console.log(result);
}).catch(err =>{
    console.log(err);
})

})

