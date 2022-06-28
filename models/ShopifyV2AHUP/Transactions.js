const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModelSchema = new Schema({
  store_identifier: { type: String, required: true },
  jobId: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  products: [
    {
      id: { type: String },
      title: { type: String }
    }
  ]
})

module.exports = mongoose.model('ShopifyV2AHUPTransactions', ModelSchema, 'shopify-v2ahup-transactions')
