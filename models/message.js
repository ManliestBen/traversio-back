import mongoose from 'mongoose'

const Schema = mongoose.Schema

const replySchema = new Schema({
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  content: String
}, {
  timestamps: true
})

const messageSchema = new Schema({
  sender: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  recipient: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  read: Boolean,
  subject: String,
  content: String,
  photos: [String], // stretch
  replies: [replySchema]
},{
  timestamps: true,
})

const Message = mongoose.model('Message', messageSchema)

export { Message }
