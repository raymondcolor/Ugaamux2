const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//update page route.
router.get('/updateprfle', (req, res) => {
    res.render('update');
});

module.exports = router;