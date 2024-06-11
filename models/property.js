import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  rating: {
    type: Number, 
    min: 1, 
    max: 5
  },
  content: String,
  photos: [String]
}, {
  timestamps: true
})

const propertySchema = new Schema({
  name: String,
  description: String,
  streetAddress: String,
  city: String,
  state: String,
  zipCode: Number,
  layout: {
    type: String, 
    enum: ['House', 'Apartment', 'Condo', 'Townhome', 'Mansion', 'Cabin']
  },
  dailyRate: Number,
  numBathrooms: Number,
  numBedrooms: Number,
  photos: [String],
  amenities: {
    type: String,
    enum: ['Pool', 'Game Room', 'Grill', 'Air Conditioning', 'Wifi', 'Kitchen', 'Hot Tub', 'Washer/Dryer', 'Covered Parking', 'Balcony', 'Beach Access', 'TV', 'Sauna', 'Refrigerator', 'Dishwasher', 'Oven', 'Microwave', 'Gym', 'Hair Dryer']
  },
  petFriendly: Boolean,
  datesBooked: [Date],
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  reviews: [reviewSchema]

},{
  timestamps: true,
})

const Property = mongoose.model('Property', propertySchema)

export { Property }
