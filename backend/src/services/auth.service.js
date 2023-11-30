const { findEmail, createUser } = require('../services/user.service')

const registerService = async (body) => {
    const { email } = body
    
    const verifyEmail = await findEmail(email)
    if (verifyEmail) { throw new Error('USER_EXIST') }
    
    const validator =generateRandomNumber().toString()

    const newUser = await createUser({ ...body })
    return newUser
}

module.exports = { registerService }