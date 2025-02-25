import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="bg-blue-600 p-4 text-white">
			<div className="container mx-auto flex justify-between">
				<Link to="/" className="text-xl font-bold">
					My App
				</Link>
				<div>
					<Link to="/" className="mr-4">
						Home
					</Link>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
