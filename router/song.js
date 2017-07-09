const express = require('express')
const router = express.Router()
const Song = require('../model/song')

// 查询所有歌曲
router.get('/songList', (req, res) => {
  Song.find({})
       .sort({ update_at : -1})
       .then(songs => {
         res.json(songs)
       })
       .catch(err => {
         res.json(err)
       })
})
// 通过ObjectId查询单个电影
router.get('/song/:id', (req, res) => {
  Song.findById(req.params.id)
    .then(song => {
      res.json(song)
    })
    .catch(err => {
      res.json(err)
    })
})
// 添加一首歌曲
router.post('/addSong', (req, res) => {
  //使用Song model上的create方法储存数据
  Song.create(req.body, (err, song) => {
    if (err) {
      res.json(err)
    } else {
      res.json(song)
    }
  })
  // 使用实例的save方法存储数据
  // let song = new Song({
  //   song_name : req.body.song_name,
  //   singer : req.body.singer
  // })
  // song.save( (err,song) => {
  //   if (err) {
  //     res.json(err)
  //   } else {
  //     res.json(song)
  //   }
  // })
})
//更新一首歌曲
router.put('/updateSong/:id',(req,res) => {
  Song.findOneAndUpdate({ _id : req.params.id}
       ,{ $set : { song_name: req.body.song_name,
         singer : req.body.singer,
         update_at: req.body.update_at}
         },{
           new : true
         })
       .then(song => res.json(song))
       .catch(err => res.json(err))
})
//删除一首歌曲
router.delete('/deleteSong/:id',(req,res) => {
  Song.findOneAndRemove({
        _id : req.params.id
        })
       .then(song => res.send(`${song.song_name}删除成功`))
       .catch(err => res.json(err))
})

module.exports = router
