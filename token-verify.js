const jwt = require('jsonwebtoken')

const secret = 'luis'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjb3N0dW1lciIsImlhdCI6MTY4NjM3NTM2M30.K7xkomxPkc5ugSeQKMPp222FDbVwN2Ral13h9xWFM0o'

const payload = jwt.verify(token, secret)

console.log(payload)


