const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Artistdb = require('../models/artistregistrationmodel');
const Banddb = require('../models/bandregistrationmodel');
const comediandb = require('../models/comedianrgtnmodel');
const User = require('../models/usermodel');

//post blog page

// router.get('/dashboard', async(req, res) => {
//     if (req.session.user) {
//         try {
//             const users = await Artistdb.find();
//             console.log(users);
//             res.render('dash', { artists: users });
//         } catch {
//             res.status(400).send('Unable to find artists');
//         }
//     } else {
//         res.redirect('/signinpage/signin');
//     }
// });

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