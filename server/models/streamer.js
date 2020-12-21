const mongoose = require('mongoose');

const streamerSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    streamer_name: String,
    twitch: String,
    twitter: String,
    instagram: String,
    image: String,
    bio: String
});

module.exports = mongoose.model('Streamer', streamerSchema);