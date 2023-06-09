const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50)
const price = Joi.number().integer().min(10);
const price_min = Joi.number().integer().min(10);
const price_max = Joi.number().integer().min(10);
const description= Joi.string().min(10)
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const limit = Joi.number().integer();
const offset = Joi.number().integer();



const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId: categoryId.required()
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  categoryId: categoryId,
  image: image
})

const getProductSchema = Joi.object({
  id: id.required(),
})

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min',{
    is: Joi.number().integer().required(),
    then: Joi.required()
  })
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema, queryProductSchema }
