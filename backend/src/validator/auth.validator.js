const { body } = require('express-validator')
const validateResult = require('../libs/handleValidator')

const validateRegister = [
    body("firstname").trim().exists().notEmpty(),
    body("lastname").trim().exists().notEmpty(),
    body("email").trim().exists().notEmpty().isEmail(),
    body("password").trim().exists().notEmpty().isLength({ min: 8, max: 20 }),
    (req, res, next) => { validateResult(req, res, next) }
]

module.exports = { validateRegister }

