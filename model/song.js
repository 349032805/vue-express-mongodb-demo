const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
  song_name : { type:String, required : true },
  singer : String,
  create_at : Number,
  update_at : Number
})

const Song = module.exports = mongoose.model('Song',songSchema)
