const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

//post blog page
router.get('/comedian', (req, res) => {
    res.render('../views/comedians');
});


//   /comedianspage/comedian
module.exports = router;