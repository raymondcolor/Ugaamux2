const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Banddb = require('../models/bandregistrationmodel')
    //bandprofile
router.get('/bndprofile', async(req, res) => {
    if (req.session.user) {
        try {
            const band = await Banddb.findOne({ email: req.user.email });
            res.render('bandprofile', { band: band });
        } catch {

            res.status(400).send('there is no match');
        }
    } else {
        res.redirect('/signinpage/signin');
    }


});

module.exports = router;