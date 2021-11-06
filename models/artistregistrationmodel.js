const mongoose = require('mongoose');
const passportLM = require('passport-local-mongoose');


const artistSchema = new mongoose.Schema({
    birthname: {
        type: String,
        trim: true,
        required: true,
    },
    stagename: {
        type: String,
        trim: true,
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

    album: {
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


    artpic: {
        type: String,

    },
    place: {
        type: String,
        trim: true,
    },
});


module.exports = mongoose.model('Artistdb', artistSchema);