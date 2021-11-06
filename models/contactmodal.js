const mongoose = require('mongoose');

const ContactusSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true,
        required: true,
    },
    lname: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    message: {
        type: String,
    },
});

module.exports = mongoose.model('contactdb', ContactusSchema);