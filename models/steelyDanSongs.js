const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    length: String,
    album: String,
    studioMusicians: [String],
    rocks: Boolean
});

const Songs = mongoose.model('Song', songSchema);

module.export = Songs;

