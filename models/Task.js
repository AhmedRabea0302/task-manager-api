const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'The Task Name Is Required'],
        maxLength: [15, 'The Task Name Max Length is 15 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Task', TaskSchema);