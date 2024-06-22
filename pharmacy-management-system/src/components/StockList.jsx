import { useState, useEffect } from 'react'
import axios from 'axios'

const StockList = () => {
	const [stocks, setStocks] = useState([])

	useEffect(() => {
		fetchStocks()
	}, [])

	const fetchStocks = async () => {
		try {
			const response = await axios.get('http://localhost:5000/api/stocks')
			setStocks(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleView = (stockId) => {
		// Implement view functionality here
		console.log(`View Stock with ID: ${stockId}`)
	}

	const handleUpdate = (stockId) => {
		// Implement update functionality here
		console.log(`Update Stock with ID: ${stockId}`)
	}

	const handleDelete = async (stockId) => {
		// Implement delete functionality here
		try {
			await axios.delete(`http://localhost:5000/api/stocks/${stockId}`)
			alert('Stock deleted successfully')
			// Refresh the stock table after deletion
			fetchStocks()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='table-container'>
			<h2>Stocks</h2>
			<table className='styled-table'>
				<thead>
					<tr>
						<th>Stock ID</th>
						<th>Medicine ID</th>
						<th>Supplier ID</th>
						<th>Quantity</th>
						<th>Cost</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{stocks.map((stock) => (
						<tr key={stock.stock_id}>
							<td>{stock.stock_id}</td>
							<td>{stock.medicine_id}</td>
							<td>{stock.supplier_id}</td>
							<td>{stock.quantity}</td>
							<td>{stock.cost}</td>
							<td>{stock.date}</td>
							<td>
								<button
									className='action-button view-button'
									onClick={() => handleView(stock.stock_id)}
								>
									View
								</button>
								<button
									className='action-button update-button'
									onClick={() => handleUpdate(stock.stock_id)}
								>
									Update
								</button>
								<button
									className='action-button delete-button'
									onClick={() => handleDelete(stock.stock_id)}
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

export default StockList
