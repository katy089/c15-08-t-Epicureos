const { 
    seeAvailabilityController, 
    addAvailabilityController, 
    seePlaceAvailabilityController, 
    seeDateAvailabilityController, 
    seeStripAvailabilityController,
    createAvailabilityDates  
} = require('../controllers/availability.controller')

const { Router } = require('express')
const { validateAvailability } = require('../validator/availability.validator')

const router = Router()

router.get('/findDateAvailability', seeDateAvailabilityController)
router.use('/findStripAvailability/:date', seeStripAvailabilityController)
router.post('/addAvailability', validateAvailability, addAvailabilityController)

//super user o admin
router.post('/createSeveralDate', createAvailabilityDates)
router.patch('/disableDates',disablePreviousDates)



module.exports = router 
