const jwt = require('jsonwebtoken')

const generateToken = (uid) => {
    const expiresIn = '7d';
    const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn });
    return { token, expiresIn };
};

const generateRefreshToken = (uid, res) => {
    const expiresIn = '7d';
    const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, {
        expiresIn,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: !(process.env.MODO === "developer"),
        expires: new Date(Date.now() + expiresIn),
    });
};
module.exports = {generateToken, generateRefreshToken}
