import { useState } from 'react'
import axios from 'axios'

const PrescriptionForm = () => {
	const [formData, setFormData] = useState({
		prescription_id: '',
		doctor_id: '',
		patient_id: '',
		prescript_id: '',
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
			await axios.post('http://localhost:5000/api/prescriptions', formData)
			alert('Prescription added successfully')
			// Optionally, clear form data after successful submission
			setFormData({
				prescription_id: '',
				doctor_id: '',
				patient_id: '',
				prescript_id: '',
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
				Add Prescription
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
								name='prescription_id'
								value={formData.prescription_id}
								onChange={handleChange}
								placeholder='Prescription ID'
							/>
							<input
								type='text'
								name='doctor_id'
								value={formData.doctor_id}
								onChange={handleChange}
								placeholder='Doctor ID'
							/>
							<input
								type='text'
								name='patient_id'
								value={formData.patient_id}
								onChange={handleChange}
								placeholder='Patient ID'
							/>
							<input
								type='text'
								name='prescript_id'
								value={formData.prescript_id}
								onChange={handleChange}
								placeholder='Prescript ID'
							/>
							<input
								type='date'
								name='date'
								value={formData.date}
								onChange={handleChange}
								placeholder='Date'
							/>
							<button type='submit'>Add Prescription</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default PrescriptionForm
