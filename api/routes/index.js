const express = require('express');
const productsRouter = require('./productsRouter')
const categoriesRouter = require('./categoriesRouter')
const userRouter = require('./userRouter')
const orderRouter = require('./orderRouter')
const customerRoute = require('./customerRoute')


function routerAPI(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users', userRouter)
  router.use('/orders', orderRouter)
  router.use('/customer', customerRoute)
}

module.exports = routerAPI;
