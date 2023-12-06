const { seeAvailabilityController, addAvailabilityController } = require('../controllers/availability.controller')

const { Router } = require('express')
const { validateAvailability } = require('../validator/availability.validator')

const router = Router()

router.get('/findAvailability', seeAvailabilityController)
router.post('/addAvailability', validateAvailability, addAvailabilityController)

module.exports = router 