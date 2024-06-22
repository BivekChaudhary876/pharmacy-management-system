const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const Admin = require('./models/admin')
const Cashier = require('./models/cashier')
const Pharmacist = require('./models/pharmacist')
const Prescription = require('./models/prescription')
const Prescript = require('./models/prescript')
const Manager = require('./models/manager')
const Stock = require('./models/stock')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/pharmacy')

app.use(cors())
app.use(bodyParser.json())

// CRUD operations for Admin
app.post('/api/admins', async (req, res) => {
	const admin = new Admin(req.body)
	try {
		await admin.save()
		res.status(201).send(admin)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/admins', async (req, res) => {
	try {
		const admins = await Admin.find()
		res.status(200).send(admins)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.put('/api/admins/:id', async (req, res) => {
	try {
		const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		if (!admin) {
			return res.status(404).send({ message: 'Admin not found' })
		}
		res.status(200).send(admin)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.delete('/api/admins/:id', async (req, res) => {
	try {
		const admin = await Admin.findByIdAndDelete(req.params.id)
		if (!admin) {
			return res.status(404).send({ message: 'Admin not found' })
		}
		res.status(200).send({ message: 'Admin deleted successfully' })
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/admins/:id', async (req, res) => {
	try {
		const admin = await Admin.findById(req.params.id)
		if (!admin) {
			return res.status(404).send({ message: 'Admin not found' })
		}
		res.status(200).send(admin)
	} catch (error) {
		res.status(400).send(error)
	}
})

// CRUD operations for Cashier
app.post('/api/cashiers', async (req, res) => {
	const cashier = new Cashier(req.body)
	try {
		await cashier.save()
		res.status(201).send(cashier)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/cashiers', async (req, res) => {
	try {
		const cashiers = await Cashier.find()
		res.status(200).send(cashiers)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.put('/api/cashiers/:id', async (req, res) => {
	try {
		const cashier = await Cashier.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		if (!cashier) {
			return res.status(404).send({ message: 'Cashier not found' })
		}
		res.status(200).send(cashier)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.delete('/api/cashiers/:id', async (req, res) => {
	try {
		const cashier = await Cashier.findByIdAndDelete(req.params.id)
		if (!cashier) {
			return res.status(404).send({ message: 'Cashier not found' })
		}
		res.status(200).send({ message: 'Cashier deleted successfully' })
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/cashiers/:id', async (req, res) => {
	try {
		const cashier = await Cashier.findById(req.params.id)
		if (!cashier) {
			return res.status(404).send({ message: 'Cashier not found' })
		}
		res.status(200).send(cashier)
	} catch (error) {
		res.status(400).send(error)
	}
})

// CRUD operations for Pharmacist
app.post('/api/pharmacists', async (req, res) => {
	const pharmacist = new Pharmacist(req.body)
	try {
		await pharmacist.save()
		res.status(201).send(pharmacist)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/pharmacists', async (req, res) => {
	try {
		const pharmacists = await Pharmacist.find()
		res.status(200).send(pharmacists)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.put('/api/pharmacists/:id', async (req, res) => {
	try {
		const pharmacist = await Pharmacist.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!pharmacist) {
			return res.status(404).send({ message: 'Pharmacist not found' })
		}
		res.status(200).send(pharmacist)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.delete('/api/pharmacists/:id', async (req, res) => {
	try {
		const pharmacist = await Pharmacist.findByIdAndDelete(req.params.id)
		if (!pharmacist) {
			return res.status(404).send({ message: 'Pharmacist not found' })
		}
		res.status(200).send({ message: 'Pharmacist deleted successfully' })
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/pharmacists/:id', async (req, res) => {
	try {
		const pharmacist = await Pharmacist.findById(req.params.id)
		if (!pharmacist) {
			return res.status(404).send({ message: 'Pharmacist not found' })
		}
		res.status(200).send(pharmacist)
	} catch (error) {
		res.status(400).send(error)
	}
})

// CRUD operations for Prescription
app.post('/api/prescriptions', async (req, res) => {
	const prescription = new Prescription(req.body)
	try {
		await prescription.save()
		res.status(201).send(prescription)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/prescriptions', async (req, res) => {
	try {
		const prescriptions = await Prescription.find()
		res.status(200).send(prescriptions)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.put('/api/prescriptions/:id', async (req, res) => {
	try {
		const prescription = await Prescription.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!prescription) {
			return res.status(404).send({ message: 'Prescription not found' })
		}
		res.status(200).send(prescription)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.delete('/api/prescriptions/:id', async (req, res) => {
	try {
		const prescription = await Prescription.findByIdAndDelete(req.params.id)
		if (!prescription) {
			return res.status(404).send({ message: 'Prescription not found' })
		}
		res.status(200).send({ message: 'Prescription deleted successfully' })
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/prescriptions/:id', async (req, res) => {
	try {
		const prescription = await Prescription.findById(req.params.id)
		if (!prescription) {
			return res.status(404).send({ message: 'Prescription not found' })
		}
		res.status(200).send(prescription)
	} catch (error) {
		res.status(400).send(error)
	}
})

// CRUD operations for Prescript
app.post('/api/prescripts', async (req, res) => {
	const prescript = new Prescript(req.body)
	try {
		await prescript.save()
		res.status(201).send(prescript)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/prescripts', async (req, res) => {
	try {
		const prescripts = await Prescript.find()
		res.status(200).send(prescripts)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.put('/api/prescripts/:id', async (req, res) => {
	try {
		const prescript = await Prescript.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!prescript) {
			return res.status(404).send({ message: 'Prescript not found' })
		}
		res.status(200).send(prescript)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.delete('/api/prescripts/:id', async (req, res) => {
	try {
		const prescript = await Prescript.findByIdAndDelete(req.params.id)
		if (!prescript) {
			return res.status(404).send({ message: 'Prescript not found' })
		}
		res.status(200).send({ message: 'Prescript deleted successfully' })
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/prescripts/:id', async (req, res) => {
	try {
		const prescript = await Prescript.findById(req.params.id)
		if (!prescript) {
			return res.status(404).send({ message: 'Prescript not found' })
		}
		res.status(200).send(prescript)
	} catch (error) {
		res.status(400).send(error)
	}
})

// CRUD operations for Manager
app.post('/api/managers', async (req, res) => {
	const manager = new Manager(req.body)
	try {
		await manager.save()
		res.status(201).send(manager)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/managers', async (req, res) => {
	try {
		const managers = await Manager.find()
		res.status(200).send(managers)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.put('/api/managers/:id', async (req, res) => {
	try {
		const manager = await Manager.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		if (!manager) {
			return res.status(404).send({ message: 'Manager not found' })
		}
		res.status(200).send(manager)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.delete('/api/managers/:id', async (req, res) => {
	try {
		const manager = await Manager.findByIdAndDelete(req.params.id)
		if (!manager) {
			return res.status(404).send({ message: 'Manager not found' })
		}
		res.status(200).send({ message: 'Manager deleted successfully' })
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/managers/:id', async (req, res) => {
	try {
		const manager = await Manager.findById(req.params.id)
		if (!manager) {
			return res.status(404).send({ message: 'Manager not found' })
		}
		res.status(200).send(manager)
	} catch (error) {
		res.status(400).send(error)
	}
})

// CRUD operations for Stock
app.post('/api/stocks', async (req, res) => {
	const stock = new Stock(req.body)
	try {
		await stock.save()
		res.status(201).send(stock)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/stocks', async (req, res) => {
	try {
		const stocks = await Stock.find()
		res.status(200).send(stocks)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.put('/api/stocks/:id', async (req, res) => {
	try {
		const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		if (!stock) {
			return res.status(404).send({ message: 'Stock not found' })
		}
		res.status(200).send(stock)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.delete('/api/stocks/:id', async (req, res) => {
	try {
		const stock = await Stock.findByIdAndDelete(req.params.id)
		if (!stock) {
			return res.status(404).send({ message: 'Stock not found' })
		}
		res.status(200).send({ message: 'Stock deleted successfully' })
	} catch (error) {
		res.status(400).send(error)
	}
})

app.get('/api/stocks/:id', async (req, res) => {
	try {
		const stock = await Stock.findById(req.params.id)
		if (!stock) {
			return res.status(404).send({ message: 'Stock not found' })
		}
		res.status(200).send(stock)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.listen(5000, () => {
	console.log('Server is running on port 5000')
})
