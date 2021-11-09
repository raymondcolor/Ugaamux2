const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//route for the artist  page for public
router.get('/artist', (req, res) => {
    res.render('artist');
});

module.exports = router;