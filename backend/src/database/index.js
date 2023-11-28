const {Sequelize} = require('sequelize')
const { POSTGRES_URL } = process.env

const sequelize = new Sequelize(POSTGRES_URL, {
  logging: false,
  dialectModule: require('pg')
})

const connectionDatabase = (force) => {
    const User = require('../models/user.model')

    sequelize
       .sync({force})
       .then(() => console.log('db is conected'))
       .catch((error) => console.error('Unable to connect to the database', error.message))  
}

module.exports = {
    sequelize,
    connectionDatabase
}