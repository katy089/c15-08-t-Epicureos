const {Sequelize} = require('sequelize')
const { POSTGRES_URL } = process.env

const sequelize = new Sequelize(POSTGRES_URL, {
  logging: false,
  dialectModule: require('pg')
})

const connectionDatabase = (force) => {

    const User = require('../models/user.model')
    const Branch = require('../models/branch.model')
    const Availability = require('../models/availability.model')
    const Bookings = require('../models/bookings.model')

    User.belongsToMany(Branch, { through: 'userBranch'})
    Branch.belongsToMany(User, { through: 'userBranch' })

    Branch.hasMany(Availability, {foreignKey: 'branchId'})
    Availability.belongsTo(Branch, {foreignKey: 'branchId'})

    Branch.hasMany(Bookings, {foreignKey: 'branchId'})
    Bookings.belongsTo(Branch, {foreignKey: 'branchId'})

    User.hasMany(Bookings, {foreignKey: 'userId'})
    Bookings.belongsTo(User, {foreignKey: 'userId'})

    sequelize
       .sync({force})
       .then(() => console.log('db is conected'))
       .catch((error) => console.error('Unable to connect to the database', error.message))  

      }

module.exports = {
    sequelize,
    connectionDatabase
}