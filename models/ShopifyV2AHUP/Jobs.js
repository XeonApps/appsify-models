const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModelSchema = new Schema({
  store_identifier: { type: String, required: true },
  workerId: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  status: { type: String, enum: ['in_progress', 'completed', 'cancel_in_progress', 'cancelled', 'reverse_in_progres', 'reversed'], required: true },
  actionType: { type: String, enum: ['hider', 'publisher'], required: true },
  frequencyType: { type: String, enum: ['manual', 'scheduled', 'instant', 'after_time', 'date_time'] },
  channelType: { type: String, enum: ['online_store', 'status'] },
  iterationCount: { type: Number, default: 0 },
  completed_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('ShopifyV2AHUPJobs', ModelSchema, 'shopify-v2ahup-jobs')
