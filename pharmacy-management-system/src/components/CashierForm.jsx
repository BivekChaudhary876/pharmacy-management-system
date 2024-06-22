import { useState } from 'react'
import axios from 'axios'

const CashierForm = () => {
	const [formData, setFormData] = useState({
		cashier_id: '',
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
		postal_address: '',
		username: '',
		password: '',
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
			await axios.post('http://localhost:5000/api/cashiers', formData)
			alert('Cashier added successfully')
			// Optionally, clear form data after successful submission
			setFormData({
				cashier_id: '',
				first_name: '',
				last_name: '',
				phone: '',
				email: '',
				postal_address: '',
				username: '',
				password: '',
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
			<button onClick={openForm}>Add Admin</button>
			{showForm && (
				<div className='modal'>
					<div className='modal-content'>
						<span className='close' onClick={closeForm}>
							&times;
						</span>
						<form onSubmit={handleSubmit}>
							<input
								type='text'
								name='cashier_id'
								value={formData.cashier_id}
								onChange={handleChange}
								placeholder='Cashier ID'
							/>
							<input
								type='text'
								name='first_name'
								value={formData.first_name}
								onChange={handleChange}
								placeholder='First Name'
							/>
							<input
								type='text'
								name='last_name'
								value={formData.last_name}
								onChange={handleChange}
								placeholder='Last Name'
							/>
							<input
								type='text'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								placeholder='Phone'
							/>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Email'
							/>
							<input
								type='text'
								name='postal_address'
								value={formData.postal_address}
								onChange={handleChange}
								placeholder='Postal Address'
							/>
							<input
								type='text'
								name='username'
								value={formData.username}
								onChange={handleChange}
								placeholder='Username'
							/>
							<input
								type='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								placeholder='Password'
							/>
							<input
								type='date'
								name='date'
								value={formData.date}
								onChange={handleChange}
								placeholder='Date'
							/>
							<button type='submit'>Add Cashier</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default CashierForm
