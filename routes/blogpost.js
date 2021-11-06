const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//signin page
router.get('/blog', (req, res) => {
    res.render('../views/postblog');
});

module.exports = router;