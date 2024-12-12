const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("database connected successfully")
    }catch(err){
        console.log(err)
        console.log("database connection failed")
    }
}

module.exports = connectDB