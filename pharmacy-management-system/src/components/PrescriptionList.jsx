import { useState, useEffect } from 'react'
import axios from 'axios'

const PrescriptionList = () => {
	const [prescriptions, setPrescriptions] = useState([])

	useEffect(() => {
		fetchPrescriptions()
	}, [])

	const fetchPrescriptions = async () => {
		try {
			const response = await axios.get(
				'http://localhost:5000/api/prescriptions'
			)
			setPrescriptions(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleView = (prescriptionId) => {
		// Implement view functionality here
		console.log(`View Prescription with ID: ${prescriptionId}`)
	}

	const handleUpdate = (prescriptionId) => {
		// Implement update functionality here
		console.log(`Update Prescription with ID: ${prescriptionId}`)
	}

	const handleDelete = async (prescriptionId) => {
		// Implement delete functionality here
		try {
			await axios.delete(
				`http://localhost:5000/api/prescriptions/${prescriptionId}`
			)
			alert('Prescription deleted successfully')
			// Refresh the prescription table after deletion
			fetchPrescriptions()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='table-container'>
			<h2>Prescriptions</h2>
			<table className='styled-table'>
				<thead>
					<tr>
						<th>Prescription ID</th>
						<th>Patient ID</th>
						<th>Medicine ID</th>
						<th>Quantity</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{prescriptions.map((prescription) => (
						<tr key={prescription.prescription_id}>
							<td>{prescription.prescription_id}</td>
							<td>{prescription.patient_id}</td>
							<td>{prescription.medicine_id}</td>
							<td>{prescription.quantity}</td>
							<td>{prescription.date}</td>
							<td>
								<button
									className='action-button view-button'
									onClick={() => handleView(prescription.prescription_id)}
								>
									View
								</button>
								<button
									className='action-button update-button'
									onClick={() => handleUpdate(prescription.prescription_id)}
								>
									Update
								</button>
								<button
									className='action-button delete-button'
									onClick={() => handleDelete(prescription.prescription_id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default PrescriptionList
