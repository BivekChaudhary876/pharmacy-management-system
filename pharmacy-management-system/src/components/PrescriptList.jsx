import { useState, useEffect } from 'react'
import axios from 'axios'

const PrescriptList = () => {
	const [prescripts, setPrescripts] = useState([])

	useEffect(() => {
		fetchPrescripts()
	}, [])

	const fetchPrescripts = async () => {
		try {
			const response = await axios.get('http://localhost:5000/api/prescripts')
			setPrescripts(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleView = (prescriptId) => {
		// Implement view functionality here
		console.log(`View Prescript with ID: ${prescriptId}`)
	}

	const handleUpdate = (prescriptId) => {
		// Implement update functionality here
		console.log(`Update Prescript with ID: ${prescriptId}`)
	}

	const handleDelete = async (prescriptId) => {
		// Implement delete functionality here
		try {
			await axios.delete(`http://localhost:5000/api/prescripts/${prescriptId}`)
			alert('Prescript deleted successfully')
			// Refresh the prescript table after deletion
			fetchPrescripts()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='table-container'>
			<h2>Prescripts</h2>
			<table className='styled-table'>
				<thead>
					<tr>
						<th>Prescript ID</th>
						<th>Patient ID</th>
						<th>Physician ID</th>
						<th>Prescription</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{prescripts.map((prescript) => (
						<tr key={prescript.prescript_id}>
							<td>{prescript.prescript_id}</td>
							<td>{prescript.patient_id}</td>
							<td>{prescript.physician_id}</td>
							<td>{prescript.prescription}</td>
							<td>{prescript.date}</td>
							<td>
								<button
									className='action-button view-button'
									onClick={() => handleView(prescript.prescript_id)}
								>
									View
								</button>
								<button
									className='action-button update-button'
									onClick={() => handleUpdate(prescript.prescript_id)}
								>
									Update
								</button>
								<button
									className='action-button delete-button'
									onClick={() => handleDelete(prescript.prescript_id)}
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

export default PrescriptList
