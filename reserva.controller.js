const ReservaService = require('../services/reserva.service.js');
const service = new ReservaService();

const create = async (req,res) => {
    try {
        const response = await service.create(req.body);
        res.json({ success: TextTrackCue, data: true});
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }

const update = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

}