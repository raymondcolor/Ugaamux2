const mongoose = require('mongoose');
const passportLM = require('passport-local-mongoose');

const bandSchema = new mongoose.Schema({
    bandname: {
        type: String,
        trim: true,
    },
    home: {
        type: String,
        trim: true,
    },

    bandslogan: {
        type: String,

    },

    bandicon: {
        type: String,
    },

    bandsponsers: {
        type: String,

    },
    numberofmembers: {
        type: String,
        trim: true,
    },

    members: {
        type: String,
    },


    email: {
        type: String,
        trim: true,
        unique: true,
    },

});
bandSchema.plugin(passportLM, {
    usernameField: 'email',
});
module.exports = mongoose.model('Banddb', bandSchema);