import { useState, useEffect } from 'react'
import axios from 'axios'

const PharmacistList = () => {
	const [pharmacists, setPharmacists] = useState([])

	useEffect(() => {
		fetchPharmacists()
	}, [])

	const fetchPharmacists = async () => {
		try {
			const response = await axios.get('http://localhost:5000/api/pharmacists')
			setPharmacists(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleView = (pharmacistId) => {
		// Implement view functionality here
		console.log(`View Pharmacist with ID: ${pharmacistId}`)
	}

	const handleUpdate = (pharmacistId) => {
		// Implement update functionality here
		console.log(`Update Pharmacist with ID: ${pharmacistId}`)
	}

	const handleDelete = async (pharmacistId) => {
		// Implement delete functionality here
		try {
			await axios.delete(
				`http://localhost:5000/api/pharmacists/${pharmacistId}`
			)
			alert('Pharmacist deleted successfully')
			// Refresh the pharmacist table after deletion
			fetchPharmacists()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='table-container'>
			<h2>Pharmacists</h2>
			<table className='styled-table'>
				<thead>
					<tr>
						<th>Pharmacist ID</th>
						<th>Username</th>
						<th>Password</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Postal Address</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{pharmacists.map((pharmacist) => (
						<tr key={pharmacist.pharmacist_id}>
							<td>{pharmacist.pharmacist_id}</td>
							<td>{pharmacist.username}</td>
							<td>{pharmacist.password}</td>
							<td>{pharmacist.first_name}</td>
							<td>{pharmacist.last_name}</td>
							<td>{pharmacist.phone}</td>
							<td>{pharmacist.email}</td>
							<td>{pharmacist.postal_address}</td>
							<td>{pharmacist.date}</td>
							<td>
								<button
									className='action-button view-button'
									onClick={() => handleView(pharmacist.pharmacist_id)}
								>
									View
								</button>
								<button
									className='action-button update-button'
									onClick={() => handleUpdate(pharmacist.pharmacist_id)}
								>
									Update
								</button>
								<button
									className='action-button delete-button'
									onClick={() => handleDelete(pharmacist.pharmacist_id)}
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

export default PharmacistList
