const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./costumer.model');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./order.model')
const { OrderProduct, OrderProductSchema } = require('./order-product.model')
const { Category, CategorySchema } = require('./category.model');

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));

  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  User.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setUpModels;
