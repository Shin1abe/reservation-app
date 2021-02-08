const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    max: [60, 'ユーザー名は最大60文字までです']
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    max: [60, 'Eメールは最大60文字までです']
  },
  password: {
    type: String,
    required: true,
    min: [8, 'パスワードは8文字以上です'],
    max: [30, 'パスワードは最大30文字までです']
  }
});

UserSchema.methods.hasSamePassword = function(inputPassword){
  const user = this
  return bcrypt.compareSync(inputPassword, user.password )
}

UserSchema.pre('save', function (next) {
  const user = this
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(user.password , salt, function (err, hash) {
      // Store hash in your password DB.
      user.password = hash
      next()
    });
  });
})

module.exports = mongoose.model('user', UserSchema)
