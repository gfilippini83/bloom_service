const mongoose = require('mongoose');

const dashboardSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    date: Date,
    desktopTiles: [{
        text: String,
        cols: Number,
        rows: Number,
        color: String,
        fontFamily: String,
        size: String,
        textColor: String
    }],
    mobileTiles: [{
        text: String,
        cols: Number,
        rows: Number,
        color: String,
        fontFamily: String,
        size: String,
        textColor: String
    }],
    secondaryTiles: [{
        text: String,
        cols: Number,
        rows: Number,
        color: String,
        fontFamily: String,
        size: String,
        textColor: String
    }]
});

module.exports = mongoose.model('Dashboard', dashboardSchema);