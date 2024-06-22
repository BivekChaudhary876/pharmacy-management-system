const mongoose = require('mongoose')

const pharmacistSchema = new mongoose.Schema({
	username: String,
	pharmacist_id: String,
	last_name: String,
	first_name: String,
	phone: String,
	email: String,
	postal_address: String,
	date: Date,
	password: String,
})

module.exports = mongoose.model('Pharmacist', pharmacistSchema)
