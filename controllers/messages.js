import { Message } from "../models/message.js"

async function create(req, res) {
  try {
    
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

async function addReply(req, res) {
  try {
    
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

async function deleteMessage(req, res) {
  try {
    
  } catch (err) {
    console.log(err)
    res.json({err})
  }
}

export {
  create,
  addReply,
  deleteMessage as delete
}