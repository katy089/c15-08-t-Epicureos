const { seeAvailabilityController, addAvailabilityController, seePlaceAvailabilityController, seeDateAvailabilityController, seeStripAvailabilityController } = require('../controllers/availability.controller')

const { Router } = require('express')
const { validateAvailability } = require('../validator/availability.validator')

const router = Router()

router.get('/findPlacesAvailability', seePlaceAvailabilityController)
router.get('/findDateAvailability', seeDateAvailabilityController)
router.post('/findStripAvailability', seeStripAvailabilityController)
router.post('/addAvailability', validateAvailability, addAvailabilityController)

module.exports = router 
