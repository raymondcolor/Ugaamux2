const express = require('express')
const mongoose = require('mongoose');
const Artistdb = require('../models/artistregistrationmodel');
const router = express.Router();

//update page route.
//route retreving data for updates
router.get('/updateprofile/:id', async(req, res) => {

    try {
        const user = await Artistdb.findOne({ _id: req.params.id });
        console.log(user);
        res.render('update', { artist: user });
    } catch {
        res.status(400).send('Unable to find artist');
    }

});
module.exports = router;