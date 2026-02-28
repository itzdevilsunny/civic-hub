const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // In a real application, replace with your actual MongoDB URI from .env
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/civic_hub', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
