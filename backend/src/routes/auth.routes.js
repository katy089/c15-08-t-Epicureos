const { tokenController } = require('../controllers/auth.controller')
const { loginController } = require('../controllers/login.controller')

const { Router } = require('express')

const router = Router()

router.use('/register', tokenController)

router.use('/login', loginController)

router.use('/modify', () => { console.log('modify') })


module.exports = router 