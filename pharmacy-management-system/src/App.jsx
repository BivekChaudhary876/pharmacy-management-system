import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import PharmacistForm from './components/PharmacistForm'
import PharmacistList from './components/PharmacistList'
import PrescriptionForm from './components/PrescriptionForm'
import PrescriptionList from './components/PrescriptionList'
import PrescriptForm from './components/PrescriptForm'
import PrescriptList from './components/PrescriptList'
import AdminForm from './components/AdminForm'
import AdminList from './components/AdminList'
import CashierForm from './components/CashierForm'
import CashierList from './components/CashierList'
import ManagerForm from './components/ManagerForm'
import ManagerList from './components/ManagerList'
import StockForm from './components/StockForm'
import StockList from './components/StockList'

const App = () => {
	return (
		<Router>
			<Navbar />
			<div className="container">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/services' element={<Services />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/logout' element={<Logout />} />
				<Route
					path='/prescriptions'
					element={
						<>
							<PrescriptionForm />
							<PrescriptionList />
						</>
					}
				/>
				<Route
					path='/pharmacists'
					element={
						<>
							<PharmacistForm />
							<PharmacistList />
						</>
					}
				/>
				<Route
					path='/prescripts'
					element={
						<>
							<PrescriptForm />
							<PrescriptList />
						</>
					}
				/>
				<Route
					path='/admins'
					element={
						<>
							<AdminForm />
							<AdminList />
						</>
					}
				/>
				<Route
					path='/cashiers'
					element={
						<>
							<CashierForm />
							<CashierList />
						</>
					}
				/>
				<Route
					path='/managers'
					element={
						<>
							<ManagerForm />
							<ManagerList />
						</>
					}
				/>
				<Route
					path='/stocks'
					element={
						<>
							<StockForm />
							<StockList />
						</>
					}
				/>
				</Routes>
				</div>
		</Router>
	)
}

export default App
