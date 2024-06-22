const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
	stock_id: String,
	drug_name: String,
	category: String,
	description: String,
	company: String,
	supplier: String,
	quantity: Number,
	cost: Number,
	status: String,
	date_supplied: Date,
	date_of_expiry: Date,
})

module.exports = mongoose.model('Stock', stockSchema)
