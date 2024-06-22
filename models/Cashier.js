const mongoose = require('mongoose')

const cashierSchema = new mongoose.Schema({
	cashier_id: String,
	first_name: String,
	last_name: String,
	phone: String,
	email: String,
	postal_address: String,
	username: String,
	password: String,
	date: Date,
})

module.exports = mongoose.model('Cashier', cashierSchema)
