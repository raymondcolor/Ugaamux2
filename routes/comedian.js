const express = require('express')
const mongoose = require('mongoose')
const comediandb = require('../models/comedianrgtnmodel');
const router = express.Router();

const User = require('../models/usermodel');

//route handling the comedians page, rendering artists on the page
router.get('/comedian', async(req, res) => {
    try {
        const comedians = await comediandb.find();
        const users = await User.find();
        res.render('comedians', {
            comedians: comedians,

        });
    } catch {
        res.status(400).send('Unable to find comedians');
    }
});
module.exports = router;