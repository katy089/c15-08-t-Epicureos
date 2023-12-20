const { Router } = require('express')
const { createQualifyController, qualifyHistoryController } = require('../controllers/qualification.controller')

const router = Router()

router.post('/createQualify', createQualifyController)
router.get('/allQualify', qualifyHistoryController)


module.exports = router