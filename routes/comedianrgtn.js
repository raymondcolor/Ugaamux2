const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const comediandb = require('../models/comedianrgtnmodel');
const User = require('../models/usermodel');

const router = express.Router();

//band registration page route
router.get('/comedianrgtn', (req, res) => {
    res.render('comedrgtn');
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
    //data from the band registration
router.post('/comedianrgtn', upload.single('photo'), async(req, res) => {
    console.log(req.body);
    try {
        const formdatacomed = new comediandb(req.body);
        const user = new User(req.body);
        formdatacomed.photo = req.file.path
        await formdatacomed.save();
        await User.register(user, req.body.password, (err) => {
            if (err) {
                throw err;
            }
            res.redirect('/registercomedian/comedianrgtn');
        });
    } catch (err) {
        res.status(400).send('something is not working');
        console.log(err);
    }
});

router.get('/comedianprofile', async(req, res) => {
    if (req.session.user) {
        try {
            const user = await comediandb.findOne({ email: req.user.email });
            res.render('comedianP', { comedian: user });

        } catch {
            res.status(400).send('Unable to find comedian');
        }

    } else {
        res.redirect('/signinpage/signin');
    }
});

module.exports = router;