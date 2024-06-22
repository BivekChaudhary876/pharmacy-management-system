import { useState } from 'react'
import axios from 'axios'

const PharmacistForm = () => {
	const [formData, setFormData] = useState({
		pharmacist_id: '',
		username: '',
		last_name: '',
		first_name: '',
		phone: '',
		email: '',
		postal_address: '',
		date: '',
		password: '',
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
			await axios.post('http://localhost:5000/api/pharmacists', formData)
			alert('Pharmacist added successfully')
			// Optionally, clear form data after successful submission
			setFormData({
				pharmacist_id: '',
				username: '',
				last_name: '',
				first_name: '',
				phone: '',
				email: '',
				postal_address: '',
				date: '',
				password: '',
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
				Add Pharmacist
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
								name='pharmacist_id'
								value={formData.pharmacist_id}
								onChange={handleChange}
								placeholder='Pharmacist ID'
							/>
							<input
								type='text'
								name='username'
								value={formData.username}
								onChange={handleChange}
								placeholder='Username'
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
								name='first_name'
								value={formData.first_name}
								onChange={handleChange}
								placeholder='First Name'
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
								type='date'
								name='date'
								value={formData.date}
								onChange={handleChange}
								placeholder='Date'
							/>
							<input
								type='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								placeholder='Password'
							/>
							<button type='submit'>Add Pharmacist</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default PharmacistForm
