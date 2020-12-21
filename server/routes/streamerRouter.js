const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Streamer = require('../models/streamer');

router.get('/all', (req, res, next) => {
    // console.log("Hello new streamer!")
    Streamer.find()
        .exec()
        .then( docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    // res.send({status: "SUCCESS"})
});

router.get('/:streamer_name', (req, res, next) => {
    // console.log("Hello new streamer!")
    const name = req.params.streamer_name;
    Streamer.findOne({streamer_name: name})
        .exec()
        .then( docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    // res.send({status: "SUCCESS"})
});

module.exports = router;