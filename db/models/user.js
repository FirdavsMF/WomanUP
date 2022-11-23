const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

// Defin userSchema 
const user = new Schema({
	username: {type: String, unique: false, require: false}
	password: {type: String, unique: false, require: false}
})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-seving
userSchema.pre('sve', function (next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	}
})

// create reference to User & export 
const User = mongoose.model('User', userSchema)
module.exports = User