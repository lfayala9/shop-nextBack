const express = require('express');
const validateHandler = require('../middlewares/validator.handler');
const ProductService = require('../services/productsService');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema,
} = require('../schemas/productSchema');
const router = express.Router();

const service = new ProductService();

router.get(
  '/',
  validateHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.find(req.query);
      res.json(products);
    } catch (error) {
      next(error)
    }
  }
);

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get(
  '/:id',
  validateHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validateHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch(
  '/:id',
  validateHandler(getProductSchema, 'params'),
  validateHandler(updateProductSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});

module.exports = router;
