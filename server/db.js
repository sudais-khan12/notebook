const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/notebook";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;