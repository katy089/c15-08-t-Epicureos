const User = require('../models/user.model')

const findEmail = async (email) => {
    const result = await User.findOne({where: {email: email }})
    return result
}

const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}

const findUser = async (data) => {
    const user = await User.findOne({where: {email: data.email, password: data.password}})
    return user
}

module.exports = { findEmail, createUser, findUser }