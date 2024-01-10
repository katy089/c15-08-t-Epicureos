const { createQualify, qualifyHistory, needToQualify } = require('../services/qualification.service')

const createQualifyController = async(req, res) => { // stars, comment, userId, bookingId
    try {
        const result = await createQualify(req.body)
        res.status(201).json(result) 
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

const qualifyHistoryController = async(req, res) => {
    try {
        const result = await qualifyHistory()
        res.status(200).json(result)
        
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

const needTtoQualifyController = async(req, res) => {
    try {
        const result = await needToQualify(req.params)
        res.status(201).json(result)        
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

module.exports = {
    createQualifyController,
    qualifyHistoryController,
    needTtoQualifyController
}
