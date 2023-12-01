const User = require('../models/user.model')

const findData = async (where) => {
   const result = await User.findOne({where})
   return !!result 
}

const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}


module.exports = { findData, createUser }