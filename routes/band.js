const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Banddb = require('../models/bandregistrationmodel')
const User = require('../models/usermodel');

//route handling the comedians page, rendering artists on the page
router.get('/band', async(req, res) => {
    try {
        const bands = await Banddb.find();
        const users = await User.find();
        res.render('band', {
            bands: bands,

        });
    } catch {
        res.status(400).send('Unable to find bands');
    }
});
module.exports = router;