const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModelSchema = new Schema({
  store_identifier: { type: String, required: true, index: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  name: { type: String, default: 'Untitled Worker', required: true }
})

module.exports = mongoose.model('ShopifyAHUPV2Worker', ModelSchema, 'shopify-ahup-v2-worker')
