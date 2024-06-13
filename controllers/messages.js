import { Message } from "../models/message.js"
import { Profile } from "../models/profile.js"

async function create(req, res) {
  try {
    const senderProfile = await Profile.findById(req.body.sender)
    const recipientProfile = await Profile.findById(req.body.recipient)
    const message = await Message.create(req.body)
    senderProfile.messages.push(message._id)
    await senderProfile.save()
    recipientProfile.messages.push(message._id)
    await recipientProfile.save()
    res.json(message)
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

async function markRead(req, res) {
  try {
    await Message.findByIdAndUpdate(req.params.messageId, {read: true}, {new: true})
    const profile = await Profile.findById(req.user.profile).populate({
      path: 'messages',
      populate: [{path: 'sender'}, {path: 'recipient'}]
    })
    res.json(profile)
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
  deleteMessage as delete,
  markRead
}