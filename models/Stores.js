const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StoresSchema = new Schema({
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  platform: { type: String },
  status: { type: String, enum: ['active', 'deleted'], default: 'active' },
  store_identifier: { type: String, index: true },
  store_info: Schema.Types.Mixed,
  isHeavyTrafficStore: { type: Boolean, default: false },
  shopify_apps: [
    {
      version: { type: String, enum: ['V1', 'V2'], default: 'V1' },
      app_id: { type: String },
      client_id: { type: String },
      name: { type: String },
      plan_name: { type: String },
      secret_info: {
        access_token: { type: String }
      },
      app_charge: Schema.Types.Mixed,
      review: {
        link_clicked_count: { type: Number, default: 0 },
        hasReviewed: { type: Boolean, default: false },
        askForReview: { type: Boolean, default: false }
      },
      metadata: Schema.Types.Mixed
    }
  ]
})

module.exports = mongoose.model('Stores', StoresSchema, 'stores')
