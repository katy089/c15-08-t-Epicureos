const { profileController } = require('../controllers/user.controller')

const { Router } = require('express')

const router = Router()

router.get('/profile', profileController)

module.exports = router