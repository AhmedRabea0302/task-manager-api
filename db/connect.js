const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndexe: true,
        useFindAndModify: true
    });
}

module.exports = connectDB;