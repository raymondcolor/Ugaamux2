const mongoose = require('mongoose');
const passportLM = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        trim: true,
        required: true,
    },

    role: {
        type: String,
        trim: true,
        required: true,
    },
});
userSchema.plugin(passportLM, {
    usernameField: 'email',
});

module.exports = mongoose.model('userdb', userSchema);