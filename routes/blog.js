const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//post blog page
router.get('/blog', (req, res) => {
    res.render('../views/blogp');
});

module.exports = router;