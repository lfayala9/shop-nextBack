const bcrypt = require('bcrypt')

async function hashPass(){
  const password = 'admin123'
  const hash = await bcrypt.hash(password, 10)
  console.log(hash)
}

hashPass()
