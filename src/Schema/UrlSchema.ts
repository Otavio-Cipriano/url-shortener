import { UrlModel } from '@models/UrlModel'
import { model, Schema } from 'mongoose'

const UrlSchema = new Schema<UrlModel>({
  url: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
})

const Url = model<UrlModel>('Url', UrlSchema)

export default Url
