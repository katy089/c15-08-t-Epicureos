const User = require('../models/user.model')

const findData = async (where) => await User.findOne({ where })

const showProfile = async (user) => {
    const result = await findData(user)
    const session = {
        id: result.id,
        firstname: result.firstname,
        lastname: result.lastname,
        email: result.email,
        createdAt: result.createdAt
    }
    return session
}
const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}


module.exports = { findData, createUser, showProfile }