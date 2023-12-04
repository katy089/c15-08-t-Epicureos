
const generateRandomNumber = () => {
    const randomValue = Math.random()
    const numberinRange = randomValue * 900000
    const sixDigitNumber = Math.floor(numberinRange) + 100000
    return sixDigitNumber
}

module.exports = { generateRandomNumber }