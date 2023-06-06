const { Strategy } = require('passport-local');
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const UserService = require('../../../api/services/userService')

const service = new UserService()
const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done)=>{
  try {
  const user = await service.findByEmail(email);
  if(!user){
    done(boom.unauthorized('This mail does not exist'), false)
  }
  const match = await bcrypt.compare(password, user.password);
  if(!match){
    done(boom.unauthorized('Wrong password'), false)
  }
  done(null, user)
  } catch (error) {
    done(error, false)
  }
});

module.exports = LocalStrategy;
