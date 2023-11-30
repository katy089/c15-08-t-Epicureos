const { findEmail, createUser } = require('../services/user.service')

const registerService = async (body) => {
<<<<<<< HEAD

    const {
        email,
        firstname,
        lastname,
        password
    } = body
=======
    const { email } = body
>>>>>>> 6320e7dde1fd6ea8d95cedfec63c35901f9d607f
    const verifyEmail = await findEmail(email)
    if (verifyEmail) { throw new Error('USER_EXIST') }
    const newUser = await createUser({ ...body })
    return newUser
}

module.exports = { registerService }