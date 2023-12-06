const { registerTokenController, validateController, loginController, recoverPasswordController, newPasswordController } = require('../controllers/auth.controller')

const { Router } = require('express')

const router = Router()

router.post('/register', registerTokenController)
router.post('/validate', validateController)
router.post('/login', loginController)
router.post('/recover/:email', recoverPasswordController)
router.post('/recover', newPasswordController)


module.exports = router 