const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Artistdb = require('../models/artistregistrationmodel');
const User = require('../models/usermodel');

const router = express.Router()

//artiast registration page route
router.get('/register', (req, res) => {
    res.render('register');
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage })

router.post('/register', upload.single('artpic'), async(req, res) => {
    console.log(req.body);
    try {
        const formdataartist = new Artistdb(req.body);
        const user = new User(req.body)
        formdataartist.artpic = req.file.path
        await formdataartist.save();
        await User.register(user, req.body.password, (err) => {
            if (err) {
                throw err;
            }

            res.redirect('/registerartist/register');
        });
    } catch (err) {
        res.status(400).send('something is not working');
        console.log(err);
    }
});


router.get('/profile', async(req, res) => {
    if (req.session.user) {
        try {
            const user = await Artistdb.findOne({ email: req.user.email });
            console.log(user);
            res.render('profile2', { artist: user });
        } catch {
            res.status(400).send('Unable to find artist');
        }
    } else {
        res.redirect('/signinpage/signin');
    }
});
module.exports = router;