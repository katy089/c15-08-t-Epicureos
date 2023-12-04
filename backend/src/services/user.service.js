const User = require('../models/user.model')

const findData = async (where) => await User.findOne({ where }) 

const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}


module.exports = { findData, createUser }