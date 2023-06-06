require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.port || 3003,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbKey: process.env.API_KEY,
}

module.exports = {config}
