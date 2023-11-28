const User = require('../models/user.model')

const findEmail = async (email) => {

    const result = await User.findOne({ email })

}

const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}

module.exports = { findEmail, createUser }