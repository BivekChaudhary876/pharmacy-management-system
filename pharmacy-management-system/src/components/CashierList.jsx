import { useState, useEffect } from 'react'
import axios from 'axios'

const CashierList = () => {
	const [cashiers, setCashiers] = useState([])

	useEffect(() => {
		fetchCashiers()
	}, [])

	const fetchCashiers = async () => {
		try {
			const response = await axios.get('http://localhost:5000/api/cashiers')
			setCashiers(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleView = (cashierId) => {
		// Implement view functionality here
		console.log(`View Cashier with ID: ${cashierId}`)
	}

	const handleUpdate = (cashierId) => {
		// Implement update functionality here
		console.log(`Update Cashier with ID: ${cashierId}`)
	}

	const handleDelete = async (cashierId) => {
		// Implement delete functionality here
		try {
			await axios.delete(`http://localhost:5000/api/cashiers/${cashierId}`)
			alert('Cashier deleted successfully')
			// Refresh the cashier table after deletion
			fetchCashiers()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='table-container'>
			<h2>Cashiers</h2>
			<table className='styled-table'>
				<thead>
					<tr>
						<th>Cashier ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Postal Address</th>
						<th>Username</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{cashiers.map((cashier) => (
						<tr key={cashier.cashier_id}>
							<td>{cashier.cashier_id}</td>
							<td>{cashier.first_name}</td>
							<td>{cashier.last_name}</td>
							<td>{cashier.phone}</td>
							<td>{cashier.email}</td>
							<td>{cashier.postal_address}</td>
							<td>{cashier.username}</td>
							<td>{cashier.date}</td>
							<td>
								<button
									className='action-button view-button'
									onClick={() => handleView(cashier.cashier_id)}
								>
									View
								</button>
								<button
									className='action-button update-button'
									onClick={() => handleUpdate(cashier.cashier_id)}
								>
									Update
								</button>
								<button
									className='action-button delete-button'
									onClick={() => handleDelete(cashier.cashier_id)}
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

export default CashierList
