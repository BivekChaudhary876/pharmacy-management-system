import { useState } from 'react'
import axios from 'axios'

const PrescriptForm = () => {
	const [formData, setFormData] = useState({
		pres_id: '',
		drug_name: '',
		strength: '',
		dose: '',
		qty: '',
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
			await axios.post('http://localhost:5000/api/prescripts', formData)
			alert('Prescript added successfully')
			// Optionally, clear form data after successful submission
			setFormData({
				pres_id: '',
				drug_name: '',
				strength: '',
				dose: '',
				qty: '',
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
				Add Prescript
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
								name='pres_id'
								value={formData.pres_id}
								onChange={handleChange}
								placeholder='Prescript ID'
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
								name='strength'
								value={formData.strength}
								onChange={handleChange}
								placeholder='Strength'
							/>
							<input
								type='text'
								name='dose'
								value={formData.dose}
								onChange={handleChange}
								placeholder='Dose'
							/>
							<input
								type='text'
								name='qty'
								value={formData.qty}
								onChange={handleChange}
								placeholder='Quantity'
							/>
							<button type='submit'>Add Prescript</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default PrescriptForm
