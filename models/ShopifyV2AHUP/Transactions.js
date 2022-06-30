const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModelSchema = new Schema({
  store_identifier: { type: String, required: true, index: true },
  jobId: { type: String, required: true, index: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  product: {
    id: { type: String },
    title: { type: String }
  }
})

module.exports = mongoose.model('ShopifyV2AHUPTransactions', ModelSchema, 'shopify-v2ahup-transactions')
