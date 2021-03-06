const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commonSchema = new Schema({
  compare_rule: {
    type: { type: String, enum: ['no_action', 'variant_stock', 'sum_stock_threshold', 'filters'], required: true },
    stock_threshold: {
      location_ids: { type: Array },
      threshold_value: { type: Number }
    }
  },
  frequency: {
    type: { type: String, enum: ['instant', 'scheduled', 'after_time'], required: true },
    scheduled: {
      cron_interval: { type: String } // TODO: add custom validation for cron interval string
    },
    after_time: {
      days: { type: Number }
    }
  },
  channel: {
    type: { type: String, enum: ['online_store', 'status'], required: true },
    status: {
      value: { type: String, enum: ['ACTIVE', 'ARCHIVED', 'DRAFT'], required: true },
      enableOnlineOnStatusActive: { type: Boolean, default: false }
    }
  },
  post_actions: {
    addProductTags: {
      enabled: { type: Boolean, default: false },
      tags: { type: Array } // ['pre{{item}}post']
    },
    removeProductTags: {
      enabled: { type: Boolean, default: false },
      tags: { type: Array } // ['pre{{item}}post']
    },
    redirectHiddenPage: {
      enabled: { type: Boolean, default: false },
      toPage: {
        type: { type: String, enum: ['home', 'custom'], required: true },
        custom_page_url: { type: String }
      }
    },
    sendEmail: {
      enabled: { type: Boolean, default: false },
      email: {
        to: { type: Array },
        from: { type: String },
        fromName: { type: String },
        cc: { type: Array },
        bcc: { type: Array },
        replyTo: { type: String },
        editorType: { type: String, enum: ['wysiwyg', 'html'], default: 'wysiwyg' },
        subject: { type: String },
        message: { type: String }
      }
    }
  }
})

const ModelSchema = new Schema({
  store_identifier: { type: String, required: true, index: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  enabled: { type: Boolean, default: false },
  name: { type: String, required: true },
  timezone: { type: String, required: true },
  hider: commonSchema,
  publisher: commonSchema,
  productsSelection: {
    type: { type: String, enum: ['filters', 'manual'], required: true },
    hasAtLeastOneProduct: { type: Boolean, default: false },
    manual: {
      selectedProducts: { type: Array }
    },
    filters: {
      rulesData: {
        resourceFactOptions: { type: String },
        conditions: Schema.Types.Mixed
      }
    }
  }
})

module.exports = mongoose.model('ShopifyV2AHUPWorker', ModelSchema, 'shopify-v2ahup-worker')
