// const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class OrderService {
  constructor() {}
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }
  async find() {
    const response = await models.Order.findAll();
    return response;
  }
  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        'items',
      ],
    });
    return order;
  }
  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }
  async update(id, changes) {
    const user = await this.findOne(id);
    const response = await user.update(changes)
    return response
  }
  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { response: true };
  }
}
module.exports = OrderService;
