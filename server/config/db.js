const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://gunalan:gunaappu@cluster0.5kah9ro.mongodb.net/Demoprojects", {
            useNewUrlParser: true,
        });
        console.log(`Mongo DB Connected`);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;