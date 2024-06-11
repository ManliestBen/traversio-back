import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tripSchema = new Schema({
  name: String,
  arrivalDate: Date,
  departureDate: Date,
  property: { 
    type: Schema.Types.ObjectId, 
    ref: 'Property' 
  },
  guests: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  }],
}, {
  timestamps: true
})

const requestSchema = new Schema({
  profile: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  status: {
    type: String,
    enum: ['received', 'sent', 'resolved', 'denied']
    // received -> gotten invite from another person
    // sent -> sent invite to another person
    // resolved -> both conditions for sent/received
    // denied -> rejected an incoming request
  }
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  photo: String,
  trips: [tripSchema],
  friends: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  }],
  messages: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Message'
  }],
  requests: [requestSchema]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
