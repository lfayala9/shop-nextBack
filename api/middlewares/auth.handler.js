const boom = require('@hapi/boom');
const {config} = require('../../config/config')

function checkApiKey(req, res, next){
  const apiKey = req.headers['api'];
  if(apiKey === config.dbKey){
    next();
  }else{
    next(boom.unauthorized())
  }
}

module.exports = {checkApiKey}
