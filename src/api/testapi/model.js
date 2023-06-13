import mongoose, { Schema } from 'mongoose'

const testapiSchema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  price: {
    type: String
  },
  test: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

testapiSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      author: this.author,
      price: this.price,
      test: this.test,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Testapi', testapiSchema)

export const schema = model.schema
export default model
