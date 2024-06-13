import { Profile } from '../models/profile.js'
import { Property } from '../models/property.js'
import { v2 as cloudinary } from 'cloudinary'

async function index(req, res) {
  try {
    const profiles = await Profile.find({})
    res.json(profiles)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function show(req, res) {
  try {
    const profile = await Profile.findById(req.params.profileId).populate({
      path: 'messages',
      populate: [{path: 'sender'}, {path: 'recipient'}]
    })
    res.json(profile)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findById(req.params.id)

    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url
    
    await profile.save()
    res.status(201).json(profile.photo)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function addTrip(req, res) {
  try {
    // look up the logged in user's profile
    const profile = await Profile.findById(req.user.profile)
    // add the trip to the profile
    profile.trips.push(req.body)
    // save the profile
    await profile.save()
    // look up the property
    const property = await Property.findById(req.body.property)
    // add req.body.newDatesBooked into datesBooked array
    req.body.newDatesBooked.forEach(date => {
      property.datesBooked.push(date)
    })
    // save the property
    await property.save()
    res.json(property)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { index, addPhoto, show, addTrip }
