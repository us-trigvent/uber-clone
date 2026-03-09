const mongoose = require("mongoose")
const connectDB = ()=>{
    mongoose.connect("mongodb://umesh:Umesh123@ac-qjirh4m-shard-00-00.sdppjkc.mongodb.net:27017,ac-qjirh4m-shard-00-01.sdppjkc.mongodb.net:27017,ac-qjirh4m-shard-00-02.sdppjkc.mongodb.net:27017/?ssl=true&replicaSet=atlas-134ha8-shard-0&authSource=admin&appName=umesh-cluster").then(()=>{
console.log("Connected DB")
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports = connectDB;