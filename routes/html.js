// const db = require('../models')
const path = require('path');

const express = require('express');

const router = express.Router()




router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));

});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));

});
 module.exports= router