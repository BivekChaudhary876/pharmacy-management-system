import { useState } from 'react'
import axios from 'axios'

const StockForm = () => {
	const [formData, setFormData] = useState({
		stock_id: '',
		drug_name: '',
		drug_quantity: '',
		date: '',
	})

	const [showForm, setShowForm] = useState(false)

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await axios.post('http://localhost:5000/api/stocks', formData)
			alert('Stock added successfully')
			// Optionally, clear form data after successful submission
			setFormData({
				stock_id: '',
				drug_name: '',
				drug_quantity: '',
				date: '',
			})
			// Close the form after submission
			setShowForm(false)
		} catch (error) {
			console.error(error)
		}
	}

	const openForm = () => {
		setShowForm(true)
	}

	const closeForm = () => {
		setShowForm(false)
	}

	return (
		<div>
			<button className='add-button' onClick={openForm}>
				Add Stock
			</button>
			{showForm && (
				<div className='modal'>
					<div className='modal-content'>
						<span className='close' onClick={closeForm}>
							&times;
						</span>
						<form onSubmit={handleSubmit}>
							<input
								type='text'
								name='stock_id'
								value={formData.stock_id}
								onChange={handleChange}
								placeholder='Stock ID'
							/>
							<input
								type='text'
								name='drug_name'
								value={formData.drug_name}
								onChange={handleChange}
								placeholder='Drug Name'
							/>
							<input
								type='text'
								name='drug_quantity'
								value={formData.drug_quantity}
								onChange={handleChange}
								placeholder='Drug Quantity'
							/>
							<input
								type='date'
								name='date'
								value={formData.date}
								onChange={handleChange}
								placeholder='Date'
							/>
							<button type='submit'>Add Stock</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default StockForm
