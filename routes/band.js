const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//post blog page
router.get('/band', (req, res) => {
    res.render('../views/band');
});

module.exports = router;