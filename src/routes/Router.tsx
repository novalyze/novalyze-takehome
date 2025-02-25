import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home, Login, Register } from "../pages"

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	)
}

export default AppRouter
