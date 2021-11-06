const mongoose = require('mongoose');
const passportLM = require('passport-local-mongoose');

const adminregSchema = new mongoose.Schema({
    birthname: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        trim: true,
        unique: true,
    },

});
adminregSchema.plugin(passportLM, {
    usernameField: 'email',
});

module.exports = mongoose.model('admindb', adminregSchema);