import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as propertiesCtrl from '../controllers/properties.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, propertiesCtrl.index)
router.get('/:propertyId', checkAuth, propertiesCtrl.show)
router.post('/', checkAuth, propertiesCtrl.create)
router.post('/:propertyId/reviews', checkAuth, propertiesCtrl.addReview)
router.delete('/:propertyId', checkAuth, propertiesCtrl.delete)
router.delete('/:propertyId/reviews/:reviewId', checkAuth, propertiesCtrl.deleteReview)
router.put('/:propertyId', checkAuth, propertiesCtrl.update)

export { router }
