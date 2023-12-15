const { models} = require('../libs/sequelize');

class ReservaService {

    constructor() {}

    async find() {
        const res = await models.Reserva.findAll();
        return res;
    }

    async findOne(id) {
        const res = await models.Reserva.findByPk(id);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }

    async this.delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return {deleted: true};
    }
}

module.exports = ReservaService;