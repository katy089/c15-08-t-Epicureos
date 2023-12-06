const { body } = require('express-validator')
const validateResult = require('../libs/handleValidator')
const validateAvailability = [
    body("date").exists().notEmpty(),
    (req, res, next) => { validateResult(req, res, next) }
]

module.exports = { validateAvailability }