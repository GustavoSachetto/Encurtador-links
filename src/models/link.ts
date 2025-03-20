import mongoose from "mongoose"
import { createRandomString } from "../utils/generate.ts"

export interface ILink {
  url: string,
  shortened: string,
}

const linkSchema = new mongoose.Schema<ILink>({
  url: { 
    type: String,
    required: true,
    lowercase: true,
    minLength: [8, 'Url is already shortened'],
    maxLength: [2083, 'Url length is not allowed'],
  },
  shortened: {
    type: String,
    unique: true,
    maxLength: 8,
  }
}, { timestamps: true })

linkSchema.pre('save', async function (next) {
  this.shortened = createRandomString(8)
})

linkSchema.statics.build = (attr: ILink) => {
  return new Link(attr)
}

export const Link = mongoose.model<ILink>('Link', linkSchema)