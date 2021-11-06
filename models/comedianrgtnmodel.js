const mongoose = require('mongoose');
const passportLM = require('passport-local-mongoose');

const comedianSchema = new mongoose.Schema({
    birthname: {
        type: String,
        trim: true,
        required: true,
    },

    stagename: {
        type: String,
        trim: true,
        required: true,
    },

    ID: {
        type: String,
        trim: true,
    },
    Nin: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },

    started: {
        type: String,
        trim: true,
    },

    contact: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        trim: true,
        unique: true,
    },

    photo: {
        type: String,
    },
    place: {
        type: String,
        trim: true,
    },

});
comedianSchema.plugin(passportLM, {
    usernameField: 'email',
});

module.exports = mongoose.model('comediandb', comedianSchema);