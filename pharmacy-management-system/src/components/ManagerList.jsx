import { useState, useEffect } from 'react'
import axios from 'axios'

const ManagerList = () => {
	const [managers, setManagers] = useState([])

	useEffect(() => {
		fetchManagers()
	}, [])

	const fetchManagers = async () => {
		try {
			const response = await axios.get('http://localhost:5000/api/managers')
			setManagers(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleView = (managerId) => {
		// Implement view functionality here
		console.log(`View Manager with ID: ${managerId}`)
	}

	const handleUpdate = (managerId) => {
		// Implement update functionality here
		console.log(`Update Manager with ID: ${managerId}`)
	}

	const handleDelete = async (managerId) => {
		// Implement delete functionality here
		try {
			await axios.delete(`http://localhost:5000/api/managers/${managerId}`)
			alert('Manager deleted successfully')
			// Refresh the manager table after deletion
			fetchManagers()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='table-container'>
			<h2>Managers</h2>
			<table className='styled-table'>
				<thead>
					<tr>
						<th>Manager ID</th>
						<th>Staff ID</th>
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
					{managers.map((manager) => (
						<tr key={manager.manager_id}>
							<td>{manager.manager_id}</td>
							<td>{manager.staff_id}</td>
							<td>{manager.username}</td>
							<td>{manager.password}</td>
							<td>{manager.first_name}</td>
							<td>{manager.last_name}</td>
							<td>{manager.phone}</td>
							<td>{manager.email}</td>
							<td>{manager.postal_address}</td>
							<td>{manager.date}</td>
							<td>
								<button
									className='action-button view-button'
									onClick={() => handleView(manager.manager_id)}
								>
									View
								</button>
								<button
									className='action-button update-button'
									onClick={() => handleUpdate(manager.manager_id)}
								>
									Update
								</button>
								<button
									className='action-button delete-button'
									onClick={() => handleDelete(manager.manager_id)}
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

export default ManagerList
