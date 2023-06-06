const bcrypt = require('bcrypt')

async function verify(){
  const password = 'admin123'
  const hash = '$2b$10$KH9gXBhtijgOolz8hGBsyOsgqAFJuiZLPtXVIE0dMtys92gKAiHhi'
  const match = await bcrypt.compare(password, hash)
  console.log(match)
}

verify()
