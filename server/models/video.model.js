const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoSchema = new Schema({
  video_url: {
    type: String,
    required: true
  },
  annotated: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Video', VideoSchema)
