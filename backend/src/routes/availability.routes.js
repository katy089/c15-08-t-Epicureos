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

//create 14 days - super user o admin
router.post('/createSeveralDate', createAvailabilityDates)


module.exports = router 
