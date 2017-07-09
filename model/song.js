const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
  song_name : { type:String, required : true },
  singer : String,
  created_at : { type : Date, default : Date.now },
  update_at : { type : Date, default : Date.now }
})

const Song = module.exports = mongoose.model('Song',songSchema)
