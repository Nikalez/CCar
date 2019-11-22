/**
 * Created by Alexandru-PC on 21-Nov-2019.
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('cars/index')
})

router.get('/', (req, res) => {
    res.render('cars/new')
})

router.post('/', (req,res) => {
    res.send('Create')
})

module.exports = router;