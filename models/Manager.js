const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
	manager_id: String,
	staff_id: String,
	username: String,
	password: String,
	first_name: String,
	last_name: String,
	phone: String,
	email: String,
	postal_address: String,
	date: Date,
})

module.exports = mongoose.model('Manager', managerSchema)
