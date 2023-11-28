const { tokenController } = require('../controllers/auth.controller')

const { Router } = require('express')

const router = Router()

router.use('/register', tokenController)

router.use('/login', () => { console.log('login') })

router.use('/modify', () => { console.log('modify') })


module.exports = router 