const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Artistdb = require('../models/artistregistrationmodel');
const Banddb = require('../models/bandregistrationmodel');
const comediandb = require('../models/comedianrgtnmodel');
const User = require('../models/usermodel');

//route for showing data on the dash board page, for all users in the sysem and some of
//thier data. and this applies to all categories.
router.get('/dashboard', async(req, res) => {
    try {
        const artists = await Artistdb.find();
        const bands = await Banddb.find();
        const comedians = await comediandb.find();
        const users = await User.find();
        res.render('dash', {
            artists: artists,
            comedians: comedians,
            bands: bands,
            users: users,
        });
    } catch {
        res.status(400).send('Unable to find artist');
    }
});
module.exports = router;