const mongoose = require("mongoose")
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://umesh:Umesh123@umesh-cluster.sdppjkc.mongodb.net/uber").then(()=>{
console.log("Connected DB")
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports = connectDB;