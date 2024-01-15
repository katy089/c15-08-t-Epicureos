const User = require('../models/user.model')

const findData = async (where) => await User.findOne({ where })

const showProfile = async (user) => {
    const result = await findData(user)
    if (!result) { throw new Error('USER_EXIST') }
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

const updateUserData = async (updatedData) => {

    const { id, ...restData } = updatedData
    // Buscar al usuario por su ID
    const user = await findData({ id })

    if (!user) {
        throw new Error('User not found')
    }

    const updatedUser = await User.update(restData, { where: { id: id } })
    return updatedUser
}


module.exports = { findData, createUser, showProfile, updateUserData }