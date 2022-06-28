const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModelSchema = new Schema({
  store_identifier: { type: String, required: true },
  workerId: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  status: { type: String, enum: ['in_progress', 'completed'] },
  actionType: { type: String, enum: ['hider', 'publisher'] },
  frequencyType: { type: String, enum: ['manual', 'scheduled', 'instant', 'after_time', 'date_time'], required: true },
  channelType: { type: String, enum: ['online_store', 'status'], required: true }
})

module.exports = mongoose.model('ShopifyV2AHUPJobs', ModelSchema, 'shopify-v2ahup-jobs')
