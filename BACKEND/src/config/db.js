const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfully")
    }catch(err){
        console.log("Database connection failed",err)
        process.exit(1)
    }
}

module.exports = connectDB