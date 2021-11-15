const express = require('express')
const mongoose = require('mongoose');
const Artistdb = require('../models/artistregistrationmodel');
const User = require('../models/usermodel');
const router = express.Router();

//update page route.
//route retreving data for updates
router.get('/updateprofile/:id', async(req, res) => {

    try {
        const artist = await Artistdb.findById(req.params.id);
        console.log(artist);
        res.render('update', { artist: artist });
    } catch {
        res.status(400).send('Unable to find artist');
    }

});

router.post('/updateprofile/:email', async(req, res) => {
    if (req.session.user) {
        try {
            const artist = await Artistdb.updateOne({ email: req.params.email }, req.body);
            const user = await User.updateOne({ email: req.params.email }, { email: req.body.email });
            res.redirect('/clarkdashboard/dashboard');
            console.log(artist);
            console.log(user);
        } catch {
            res.status(400).send('Unable to update  artist');
        }
    } else {
        console.log('cant find session');
        res.redirect('/signinpage/signin');
    }
});

module.exports = router;