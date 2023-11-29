const User = require('../models/user.model')

const findEmail = async (where) => {

    const result = await User.findOne({where})

}

const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}

module.exports = { findEmail, createUser }