const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//post blog page
router.get('/artist', (req, res) => {
    res.render('../views/artist');
});

module.exports = router;