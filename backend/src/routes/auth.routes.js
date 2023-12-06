const { registerTokenController, validateController, loginController, recoverPasswordController } = require('../controllers/auth.controller')
const { validateRegister } = require('../validator/auth.validator')
const { Router } = require('express')

const router = Router()

router.post('/register', validateRegister, registerTokenController)
router.post('/validate', validateController)
router.post('/login', loginController)
router.post('/recover/:email', recoverPasswordController)


module.exports = router 