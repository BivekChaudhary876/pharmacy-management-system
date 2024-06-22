import { useState } from 'react'
import axios from 'axios'

const AdminForm = () => {
	const [formData, setFormData] = useState({
		admin_id: '',
		username: '',
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
			await axios.post('http://localhost:5000/api/admins', formData)
			alert('Admin added successfully')
			setFormData({
				admin_id: '',
				username: '',
				password: '',
			})
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
				Add Admin
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
								name='admin_id'
								value={formData.admin_id}
								onChange={handleChange}
								placeholder='Admin ID'
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
							<button type='submit'>Add Admin</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default AdminForm
