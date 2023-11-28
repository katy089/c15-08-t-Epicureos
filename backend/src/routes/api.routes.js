const { Router } = require('express')



const router =  Router()

router.use('/auth', ()=>{ console.log('hola') })


module.exports = router