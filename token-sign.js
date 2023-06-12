const jwt = require('jsonwebtoken')

const secret = 'luis'
const payload = {
  sub: 1,
  role: 'costumer'
}
function signToken(payload, secret){
  return jwt.sign(payload, secret)
}

const token = signToken(payload, secret)

console.log(token)
