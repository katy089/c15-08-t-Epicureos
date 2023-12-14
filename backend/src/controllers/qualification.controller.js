const { createQualify, QualifyHistory } = require('../services/qualification.service')

const createQualifyController = async(req, res) => { // stars, comment, userId, bookingId
    try {
        const result = await createQualify(req.body)
        res.status(201).json(result)
        
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

const userQualifyHistoryController = async(req, res) => {
    try {
        const result = await QualifyHistory(req.params)
        res.status(200).json(result)
        
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

module.exports = {
    createQualifyController,
    userQualifyHistoryController
}
