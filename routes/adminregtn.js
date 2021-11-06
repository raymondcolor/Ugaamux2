const express = require('express')
const mongoose = require('mongoose')
const admindb = require('../models/adminregmodel');
const router = express.Router()
const User = require('../models/usermodel')

//band registration page route
router.get('/adminregistration', (req, res) => {
    res.render('adminform');
});


//data from the band registration
router.post('/adminregistration', async(req, res) => {
    console.log(req.body);
    try {
        const formdataB = new admindb(req.body);
        const user = new User(req.body);
        await formdataB.save();
        await User.register(user, req.body.password, (err) => {
            if (err) {
                throw err;
            }
            res.redirect('/registeradmin/adminregistration');
        });
    } catch (err) {
        res.status(400).send('something is not working')
        console.log(err);
    }
});




module.exports = router;