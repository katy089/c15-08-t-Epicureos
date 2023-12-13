const { Router } = require('express')



const router =  Router()

router.use('/auth', require('./auth.routes'))
router.use('/user', require('./user.routes'))
router.use('/availability', require('./availability.routes'))
router.use('/booking', require('./booking.routes'))

module.exports = router