const { findData, createUser } = require('../services/user.service')
const bcrypt = require('bcryptjs')


const registerService = async (body) => {
    const { email } = body
<<<<<<< HEAD
    const verifyEmail = await findEmail(email)
    if (verifyEmail) { throw new Error('USER_EXIST') }
=======
    
    const verifyEmail = await findData({email})
   if (verifyEmail) { throw new Error('USER_EXIST') }
    
    // const validator =generateRandomNumber().toString()

>>>>>>> 25e23170661f6a880ebb3f21d0cd9606c06565ea
    const newUser = await createUser({ ...body })
    return newUser
}


const loginService = async (body) => {
    const {
        email,
        password 
    } = body

    const verifyEmail = await findData({email})
    if(!verifyEmail){ throw new Error('USER_DOES_NOT_EXIST') }
    
    const hash = verifyEmail.password
    
    const verifyPassword = bcrypt.compareSync(password, hash)
   
    if(!verifyPassword){ throw new Error ('WRONG_PASSWORD') }
    
    return 'USER LOGGED'  
}

module.exports = { registerService,loginService }