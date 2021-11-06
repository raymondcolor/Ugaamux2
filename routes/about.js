const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//signin page
router.get('/about', (req, res) => {
    res.render('../views/about');
});

module.exports = router;