const Songs = require('../models/steelyDanSongs');
const mongoose = require('mongoose')

const songController = {
    showNew: (req,res) => {
        res.render('new.ejs');
    },
    create: (req,res) => {
        res.send('saxophone')
    }
};



module.exports = songController;