const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const Banddb = require('../models/bandregistrationmodel')
const User = require('../models/usermodel')


const router = express.Router()


//band registration page route
router.get('/bandregistration', (req, res) => {
    res.render('bandrgtn');
});

//multer handling the image paht and sending the photo to the folder
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

//data from the band registration to the database collection for bands
router.post('/bandregistration', upload.single('bandicon'), async(req, res) => {
    console.log(req.body);
    try {
        const formdataB = new Banddb(req.body);
        const user = new User(req.body)
        formdataB.bandicon = req.file.path
        await formdataB.save();
        await User.register(user, req.body.password, (err) => {
            if (err) {
                throw err;
            }
            res.redirect('/registerband/bandregistration');
        });
    } catch (err) {
        res.status(400).send('something is not working');
        console.log(err);
    }



});

//handling the profile details  for the band that logs in respectively.
router.get('/bandprofile/bndprofile', async(req, res) => {
    if (req.session.user) {
        try {
            const users = await Banddb.find();

            res.render('bandprofile', { bands: users });
        } catch {
            res.status(400).send('Unable to find band');
        }
    } else {
        res.redirect('/signinpage/signin');
    }
});


module.exports = router;