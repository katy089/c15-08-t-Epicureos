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
        phone: result.phone,
        password: result.password
    }
    return session
}

const createUser = async (data) => {
    const newUser = await User.create(data)
    return newUser
}

const updateUserData = async (updatedData) => {
    //agregar cambio de contraseña
    const { id, password, ...restData } = updatedData
    // Buscar al usuario por su ID

    const user = await findData({ id })

    if (!user) {
        throw new Error('User not found')
    }

    if (password != user.password) {
        user.password = password
        await user.save()
    }
    const updatedUser = await User.update(restData, { where: { id: id } })
    return updatedUser
}


module.exports = { findData, createUser, showProfile, updateUserData }