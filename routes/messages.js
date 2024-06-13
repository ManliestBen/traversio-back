import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as messagesCtrl from '../controllers/messages.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, messagesCtrl.create)
router.post('/replies', checkAuth, messagesCtrl.addReply)
router.delete('/:messageId', checkAuth, messagesCtrl.delete)
router.patch('/:messageId/markRead', checkAuth, messagesCtrl.markRead)

export { router }
