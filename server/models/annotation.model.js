const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnnotationSchema = new Schema({
  video_url: {
    type: String,
    required: true
  },
  object_frequency: {
    type: String,
    enum: ['high', 'medium', 'low'],
    required: true
  },
  object_surface_complexity: {
    type: String,
    enum: ['high', 'medium', 'low'],
    required: true
  },
  action_frequency: {
    type: String,
    enum: ['high', 'medium', 'low'],
    required: true
  },
  action_speed: {
    type: String,
    enum: ['high', 'medium', 'low'],
    required: true
  },
  shadows: {
    type: String,
    enum: ['high', 'medium', 'low'],
    required: true
  },
  scene_change: {
    type: Boolean,
    required: true
  },
  object_entrance: {
    type: Boolean,
    required: true
  },
  categories: {
    type: [String],
  }
})

module.exports = mongoose.model('Annotation', AnnotationSchema)

