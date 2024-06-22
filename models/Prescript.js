const mongoose = require('mongoose')

const prescriptSchema = new mongoose.Schema({
	pres_id: String,
	drug_name: String,
	strength: String,
	dose: String,
	qty: Number,
})

module.exports = mongoose.model('Prescript', prescriptSchema)
