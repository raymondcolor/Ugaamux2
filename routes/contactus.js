const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/contactmodal');
const contactdb = require('../models/contactmodal');

const router = express.Router()

//band registration page route
router.get('/contactUs', (req, res) => {
    res.render('contact');
});

//data from the band registration
router.post('/contactUs', async(req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sabiitiraymond29@gmail.com',
            pass: '0785234859'
        }
    });

    const mailoptions = {
        from: 'sabiitiraymond29@gmail.com',
        to: 'ray.sabiiti@gmail.com',
        subject: 'UGAAMUX',
        html: `<html><body><p>Firstname: ${req.body.fname}</p><p> Lastname: ${req.body.lname}</p><p> Email: ${req.body.email}</p><p>message: ${req.body.message}</p></body></html>`
    }

    transporter.sendMail(mailoptions, (err, info) => {
        if (err) {
            console.log('error');
            res.send('message not sent');
        } else {
            console.log('message sent' + info.response);
            res.send('sent');
        }
    })

});

module.exports = router;