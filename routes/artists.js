const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Artistdb = require('../models/artistregistrationmodel');
const User = require('../models/usermodel');

//route handling the artist page, rendering artists on the page
router.get('/artist', async(req, res) => {
    try {
        const artists = await Artistdb.find();
        const users = await User.find();
        res.render('artist', {
            artists: artists,

        });
    } catch {
        res.status(400).send('Unable to find artist');
    }
});
module.exports = router;