const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const AnnotationSchema = new Schema({
  video_url: {
    type: String,
    required: true,
  },
  video_id: {
    type: ObjectId,
    ref: 'Video',
    required: true,
    unique: true
  },
  object_frequency: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true
  },
  object_surface_complexity: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true
  },
  action_frequency: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true
  },
  action_speed: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true
  },
  shadows: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true
  },
  scene_changes: {
    type: String,
    required: ['Yes','No']
  },
  object_entrance: {
    type: String,
    required: ['Yes','No']
  },
  categories: {
    type: [String],
  }
})

module.exports = mongoose.model('Annotation', AnnotationSchema)

