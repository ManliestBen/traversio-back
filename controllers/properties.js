import { Property } from "../models/property.js"


async function index(req, res) {
  try {
    const properties = await Property.find({}).populate('owner')
    res.json(properties)
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

async function show(req, res) {
  try {
    const property = await Property.findById(req.params.propertyId).populate('owner')
    res.json(property)
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

async function create(req, res) {
  try {
    req.body.owner = req.user.profile
    const property = await Property.create(req.body)
    res.json(property)
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

async function update(req, res) {
  try {
    
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

async function deleteProperty(req, res) {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.propertyId)
    res.json(deletedProperty)
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

async function addReview(req, res) {
  try {
    
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

async function deleteReview(req, res) {
  try {
    
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

export {
  index,
  show,
  create,
  update,
  deleteProperty as delete,
  addReview,
  deleteReview
}