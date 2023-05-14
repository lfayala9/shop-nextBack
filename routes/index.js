const express = require('express');
const productsRouter = require('./productsRouter')
const categoriesRouter = require('./categoriesRouter')


function routerAPI(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)

}

module.exports = routerAPI;
