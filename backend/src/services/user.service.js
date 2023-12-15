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
};

const createUser = async (data) => {
    const newUser = await User.create(data);
    return newUser;
};

const updateUserData = async (userId, updatedData) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Update user data
        await user.update(updatedData);

        const updatedUser = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            createdAt: user.createdAt,
        };

        return updatedUser;
    } catch (error) {
        throw new Error(`Error updating user data: ${error.message}`);
    }
};


module.exports = { findData, createUser, showProfile, updateUserData }