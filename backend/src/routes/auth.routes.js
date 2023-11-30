const { registerTokenController } = require('../controllers/auth.controller')

const { Router } = require('express')

const router = Router()

router.use('/register', registerTokenController)

router.use('/login', loginController)

router.use('/modify', () => { console.log('modify') })


module.exports = router 