const express = require('express')
const mongoose = require('mongoose');
const Artistdb = require('../models/artistregistrationmodel');
const comediandb = require('../models/comedianrgtnmodel');
const Banddb = require('../models/bandregistrationmodel')
const User = require('../models/usermodel');
const router = express.Router();


//route retreving comedians data for update 
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





router.get('/comedianupdate/:id', async(req, res) => {

    try {
        const comedian = await comediandb.findOne({ _id: req.params.id });
        console.log(comedian);
        res.render('comedupdate', { comedian: comedian });
    } catch {
        res.status(400).send('Unable to find comedian');
    }

});

router.post('/comedianupdate/:email', async(req, res) => {
    if (req.session.user) {
        try {
            const artist = await comediandb.updateOne({ email: req.params.email }, req.body);
            const user = await User.updateOne({ email: req.params.email }, { email: req.body.email });
            res.redirect('/clarkdashboard/dashboard');
            console.log(artist);
            console.log(user);
        } catch {
            res.status(400).send('Unable to update  comedian');
        }
    } else {
        console.log('cant find session');
        res.redirect('/signinpage/signin');
    }
});

//band
router.get('/bandupdate/:id', async(req, res) => {

    try {
        const band = await Banddb.findOne({ _id: req.params.id });
        console.log(band);
        res.render('bandupdate', { band: band });
    } catch {
        res.status(400).send('Unable to find band');
    }

});

router.post('/bandupdate/:email', async(req, res) => {
    if (req.session.user) {
        try {
            const artist = await Banddb.updateOne({ email: req.params.email }, req.body);
            const user = await User.updateOne({ email: req.params.email }, { email: req.body.email });
            res.redirect('/clarkdashboard/dashboard');
            console.log(artist);
            console.log(user);
        } catch {
            res.status(400).send('Unable to update  band');
        }
    } else {
        console.log('cant find session');
        res.redirect('/signinpage/signin');
    }
});
module.exports = router;