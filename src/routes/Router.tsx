import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/Home.tsx"
import Login from "../pages/Login.tsx"
import Register from "../pages/Register.tsx"

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
