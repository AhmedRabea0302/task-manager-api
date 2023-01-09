const mongoose = require('mongoose');
const connectionString = 
    'mongodb+srv://taskmanager:0123456@cluster0.svcjqwb.mongodb.net/taskmanager?retryWrites=true&w=majority';

    mongoose.connect(connectionString, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndexe: true,
        useFindAndModify: true
    }).then(() => {
        console.log('connected to taskmanager');
    })
    .catch(err => {
        console.log(err)
    });