<<<<<<< HEAD
const { registerTokenController } = require('../controllers/auth.controller')
const {loginController} = require('../controllers/login.controller')
=======
const { registerTokenController, loginController } = require('../controllers/auth.controller')
>>>>>>> 25e23170661f6a880ebb3f21d0cd9606c06565ea

const { Router } = require('express')

const router = Router()

router.use('/register', registerTokenController)

router.use('/login', loginController)

router.use('/modify', () => { console.log('modify') })


module.exports = router 