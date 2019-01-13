const express = require('express')
const router = express.Router()
const Annotation = require('../models/annotation.model')
const Video = require('../models/video.model')

router.get('/', function (req, res, next) {
  return res.json('FlowChroma Annotator API')
})
router.get('/video', function (req, res, next) {
  Video.find({'annotated':false},function (err, results) {
    if(err){
      return res.json({'success':false, 'err': err})
    }
    return res.json({'success': true, result: results[Math.floor(Math.random()*results.length)]})
  })
})

router.post('/annotation', function (req, res, next) {
  var video = req.body.video
  var data = req.body.anotation
  var annotation = new Annotation(data)
  annotation.save(function (err) {
    if (err) {
      return next(err)
    }
    Video.update({'_id': video._id}, {'annotated': true}, function (err, results) {
      if (err) {
        console.log(err)
      }
    })
    return res.send('Annotation saved successfully')
  })
})

router.post('/video', function (req, res, next) {
  var data = req.body
  var video = new Video(data)
  video.save(function (err) {
    if (err) {
      return next(err)
    }
    return res.send('Video saved successfully')
  })
})


module.exports = router