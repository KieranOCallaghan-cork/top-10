const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Directly insert your MongoDB URI here
        const mongoURI = "mongodb+srv://admin:admin@kieranscluster.zfxym.mongodb.net/";
        
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
