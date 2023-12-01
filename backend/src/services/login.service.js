const { findEmail, findUser } = require('./user.service')
const User = require('../models/user.model')
const loginService = async (body) => {
    const {
        email,
        password
    } = body
    const verifyEmail = await findEmail(email)
    if(verifyEmail){
        const verifyUser = await findUser(body)
        if(verifyUser){
            return 'USER LOGGED'
        }else{
            throw new Error ('WRONG_PASSWORD')
        }
    }else{
        throw new Error('USER_DOES_NOT_EXIST')
    }
}

module.exports = { loginService }