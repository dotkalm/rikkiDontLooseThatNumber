const Songs = require('../models/steelyDanSongs');
const mongoose = require('mongoose')

const songController = {
    index:(req,res)=>{
        Songs.find({},(err, allSongs)=>{
            if(err) {
                res.send(err)
            } else {
                res.send(allSongs)
            }
        }
    )},
    showNew: (req,res) => {
        res.render('new.ejs');
    },
    create: (req,res) => {
        if (req.body.rocks === "on") {
            req.body.rocks = true;
          } else {
            req.body.rocks = false;
          } 
          console.log(req.body)
          Songs.create({
              name: req.body.name,
              length: req.body.length,
              album: req.body.album,
              studioMusicians: req.body.studioMusicians.split(', ')
          }, 
          (err, createdSong) => {
              err ? console.log(err) : res.redirect('/rikkiDontLooseThatNumber')
          }
        );
    }
};



module.exports = songController;

