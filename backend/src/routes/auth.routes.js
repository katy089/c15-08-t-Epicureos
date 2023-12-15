const { validateRegister } = require('../validator/auth.validator')
const { registerTokenController, validateController, loginController, recoverPasswordController, newPasswordController, updateUserController } = require('../controllers/auth.controller')

const { Router } = require('express')

const router = Router()

router.post('/register', validateRegister, registerTokenController)
router.post('/validate', validateController)
router.post('/login', loginController)
router.post('/recover/:email', recoverPasswordController)
router.post('/recover', newPasswordController)
router.put('/update', updateUserController)


module.exports = router 