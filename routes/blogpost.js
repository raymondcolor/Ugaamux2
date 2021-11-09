const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//posting ablog page
router.get('/blog', (req, res) => {
    res.render('../views/postblog');
});

module.exports = router;