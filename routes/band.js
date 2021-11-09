const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//band page for public
router.get('/band', (req, res) => {
    res.render('../views/band');
});

module.exports = router;