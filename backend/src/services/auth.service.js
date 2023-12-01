const { findData, createUser } = require('../services/user.service')


const registerService = async (body) => {
    const { email } = body
    
    const verifyEmail = await findData({email})
    console.log(verifyEmail)
    if (verifyEmail) { throw new Error('USER_EXIST') }
    
    // const validator =generateRandomNumber().toString()

    const newUser = await createUser({ ...body })
    return newUser
}


const loginService = async (body) => {
    const {
        email,
        password
    } = body

    const verifyEmail = await findData({email})
    console.log(verifyEmail)
    if(!verifyEmail){ throw new Error('USER_DOES_NOT_EXIST') }
    
    const verifyPassword = await await findData({password})
    if(!verifyPassword){ throw new Error ('WRONG_PASSWORD') }
    
    return 'USER LOGGED'  
}

module.exports = { registerService,loginService }