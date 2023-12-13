const moment = require('moment')
const transformDate = (date) => moment(date, "DD-MM-YYYY").format("YYYY-MM-DD")

module.exports = { transformDate }