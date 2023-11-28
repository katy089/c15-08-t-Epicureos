const { findEmail, createUser } = require('../services/user.service')

const registerService = async (body) => {

    const {
        email,
        firstname,
        lastname
    } = body
    const verifyEmail = await findEmail(email)
    if (verifyEmail) {
        throw new Error('USER_EXIST')
    }
    const newUser = await createUser({ ...body })
    return newUser
}

module.exports = { registerService }