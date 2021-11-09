const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/contactmodal');
const contactdb = require('../models/contactmodal');

const router = express.Router()

//contact form route
router.get('/contactUs', (req, res) => {
    res.render('contact');
});

//email from the contact form using the nodemailer
router.post('/contactUs', async(req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sabiitiraymond29@gmail.com', //email resposible for sending message
            pass: '0785234859'
        }
    });

    const mailoptions = {
        from: 'sabiitiraymond29@gmail.com',
        to: 'ray.sabiiti@gmail.com', //email that recives the message
        subject: 'UGAAMUX',
        html: `<html><body><p>Firstname: ${req.body.fname}</p><p> Lastname: ${req.body.lname}</p><p> Email: ${req.body.email}</p><p>message: ${req.body.message}</p></body></html>`
    }

    transporter.sendMail(mailoptions, (err, info) => {
        if (err) {
            console.log('error');
            res.send('message not sent'); //when its not ent
        } else {
            console.log('message sent' + info.response);
            res.send('sent'); //when sent
        }
    })

});

module.exports = router;