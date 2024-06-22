import { useState, useEffect } from 'react'
import axios from 'axios'

const AdminList = () => {
	const [admins, setAdmins] = useState([])
	const [viewAdmin, setViewAdmin] = useState(null)
	const [updateAdmin, setUpdateAdmin] = useState({
		admin_id: '',
		username: '',
		password: '',
	})

	useEffect(() => {
		fetchAdmins()
	}, [])

	const fetchAdmins = async () => {
		try {
			const response = await axios.get('http://localhost:5000/api/admins')
			setAdmins(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleView = (adminId) => {
		const admin = admins.find((admin) => admin.admin_id === adminId)
		if (admin) {
			setViewAdmin(admin)
		} else {
			alert('Admin not found')
		}
	}

	const handleUpdate = async (adminId) => {
		try {
			const updatedAdmin = {
				username: updateAdmin.username,
				password: updateAdmin.password,
			}

			await axios.put(
				`http://localhost:5000/api/admins/${adminId}`,
				updatedAdmin
			)
			alert('Admin updated successfully')
			// Refresh the admin table after update
			fetchAdmins()
		} catch (error) {
			console.error(error)
		}
	}

	const handleDelete = async (adminId) => {
		try {
			await axios.delete(`http://localhost:5000/api/admins/${adminId}`)
			alert('Admin deleted successfully')
			// Refresh the admin table after deletion
			fetchAdmins()
		} catch (error) {
			console.error(error)
		}
	}

	const handleChange = (e) => {
		setUpdateAdmin({
			...updateAdmin,
			[e.target.name]: e.target.value,
		})
	}

	const closeViewModal = () => {
		setViewAdmin(null)
	}

	const closeUpdateModal = () => {
		setUpdateAdmin({
			admin_id: '',
			username: '',
			password: '',
		})
	}

	const handleModalClick = (e) => {
		if (e.target.className === 'modal') {
			closeViewModal()
			closeUpdateModal()
		}
	}

	return (
		<div className='container'>
			<h2>Admins</h2>
			<table className='styled-table'>
				<thead>
					<tr>
						<th>Admin ID</th>
						<th>Username</th>
						<th>Password</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{admins.map((admin) => (
						<tr key={admin.admin_id}>
							<td>{admin.admin_id}</td>
							<td>{admin.username}</td>
							<td>{admin.password}</td>
							<td>
								<button
									className='action-button view-button'
									onClick={() => handleView(admin.admin_id)}
								>
									View
								</button>
								<button
									className='action-button update-button'
									onClick={() => setUpdateAdmin(admin)}
								>
									Update
								</button>
								<button
									className='action-button delete-button'
									onClick={() => handleDelete(admin.admin_id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{viewAdmin && (
				<div className='modal' onClick={handleModalClick}>
					<div className='modal-content'>
						<span className='close' onClick={closeViewModal}>
							&times;
						</span>
						<h2>Admin Details</h2>
						<p>Admin ID: {viewAdmin.admin_id}</p>
						<p>Username: {viewAdmin.username}</p>
						<p>Password: {viewAdmin.password}</p>
					</div>
				</div>
			)}

			{updateAdmin.admin_id && (
				<div className='modal' onClick={handleModalClick}>
					<div className='modal-content'>
						<span className='close' onClick={closeUpdateModal}>
							&times;
						</span>
						<h2>Update Admin</h2>
						<form onSubmit={() => handleUpdate(updateAdmin.admin_id)}>
							<input
								type='text'
								name='username'
								value={updateAdmin.username}
								onChange={handleChange}
								placeholder='Username'
							/>
							<input
								type='password'
								name='password'
								value={updateAdmin.password}
								onChange={handleChange}
								placeholder='Password'
							/>
							<button type='submit'>Update Admin</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default AdminList
