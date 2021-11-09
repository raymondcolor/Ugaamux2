const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//comedians page for the public
router.get('/comedian', (req, res) => {
    res.render('../views/comedians');
});



module.exports = router;