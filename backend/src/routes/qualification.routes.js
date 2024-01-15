const { Router } = require('express')
const { 
    createQualifyController, 
    qualifyHistoryController, 
    needTtoQualifyController 
} = require('../controllers/qualification.controller')

const router = Router()

router.post('/createQualify', createQualifyController)
router.get('/allQualify', qualifyHistoryController)
router.get('/toQualify/:userId', needTtoQualifyController )


module.exports = router