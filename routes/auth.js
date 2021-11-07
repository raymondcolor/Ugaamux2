const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/usermodel');
const Artistdb = require('../models/artistregistrationmodel');

const router = express.Router();

//signin page
router.get('/signin', (req, res) => {
    res.render('signin');
});


router.post('/signin', passport.authenticate('local', { failureRedirect: '/signinpage/signin' }), (req, res) => {
    req.session.user = req.user;

    User.findOne({ email: req.body.email })
        //cheaking through their roles and redirecting them to respective pages
        .then((data) => {

            if (data.role == 'band') {

                res.redirect('/bandprofile/bndprofile');

            } else if (data.role == 'Clerk') {
                res.redirect('/welcomeadmin');

            } else if (data.role == 'artist') {
                res.redirect('/registerartist/profile');

            } else if (data.role == 'comedian') {
                res.redirect('/registercomedian/comedianprofile');

            } else {
                res.send('your not authorized');
            }
        })

});

//for logingout
router.get('/logout', (req, res) => {

    req.session.destroy(() => {
        res.redirect('/signinpage/signin');
    });
});


router.post('/deleteartist', async(req, res) => {

    if (req.session.user) {

        try {

            await Artistdb.deleteOne({ email: req.body.email });
            await User.deleteOne({ email: req.body.email });
            res.redirect('back');

        } catch (err) {
            res.send('unable to delete this item', err);
        }
    } else {
        console.log('cant find session');
        res.redirect('/signinpage/signin');
    }

});



module.exports = router;