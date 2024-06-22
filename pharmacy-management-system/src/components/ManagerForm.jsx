import { useState } from 'react'
import axios from 'axios'

const ManagerForm = () => {
	const [formData, setFormData] = useState({
		manager_id: '',
		staff_id: '',
		username: '',
		password: '',
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
		postal_address: '',
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
			await axios.post('http://localhost:5000/api/managers', formData)
			alert('Manager added successfully')
			// Optionally, clear form data after successful submission
			setFormData({
				manager_id: '',
				staff_id: '',
				username: '',
				password: '',
				first_name: '',
				last_name: '',
				phone: '',
				email: '',
				postal_address: '',
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
				Add Manager
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
								name='manager_id'
								value={formData.manager_id}
								onChange={handleChange}
								placeholder='Manager ID'
							/>
							<input
								type='text'
								name='staff_id'
								value={formData.staff_id}
								onChange={handleChange}
								placeholder='Staff ID'
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
								type='date'
								name='date'
								value={formData.date}
								onChange={handleChange}
								placeholder='Date'
							/>
							<button type='submit'>Add Manager</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default ManagerForm
