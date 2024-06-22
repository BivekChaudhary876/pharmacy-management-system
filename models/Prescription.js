const mongoose = require('mongoose')

const prescriptionSchema = new mongoose.Schema({
	customer_id: String,
	customer_name: String,
	sex: String,
	age: Number,
	phone: String,
	postal_address: String,
	invoice_id: String,
})

module.exports = mongoose.model('Prescription', prescriptionSchema)
