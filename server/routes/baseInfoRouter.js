const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Dashboard = require('../models/dashboard');

router.get('/', (req, res) => {
    Dashboard.findOne({}).sort({date: -1})
        .exec()
        .then(response =>{
            console.log(response)
            res.status(200).json(response)
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
});


module.exports = router;