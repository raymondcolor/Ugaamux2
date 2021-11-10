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
    //data from the comedian registration form to the database collection
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

//handling the the profile detail to be viewed when acomedian logs in respectively
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

//route that displays information for aparticular comedian whem image clicked
//this is a public page
router.get('/comediandetails/:id', async(req, res) => {

    try {
        const user = await comediandb.findOne({ _id: req.params.id });
        console.log(user);
        res.render('comedianpublic', { comedian: user });
    } catch {
        res.status(400).send('Unable to find artist');
    }

});
module.exports = router;