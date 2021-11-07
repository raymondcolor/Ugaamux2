const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//post blog page
router.get('/updateprfle', (req, res) => {
    res.render('update');
});

module.exports = router;