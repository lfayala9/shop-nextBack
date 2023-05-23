const {config} = require('./../config/config');

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = 'postgresql://postgres:nQx8A8qsZtEsOjk0n0mm@containers-us-west-149.railway.app:5433/railway'

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}
