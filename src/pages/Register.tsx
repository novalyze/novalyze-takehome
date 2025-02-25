import Header from "../components/Header"

const Register = () => {
	return (
		<>
			<Header />
			<div className="flex h-screen items-center justify-center bg-gray-background-dark">
				<div className="max-w-md rounded-xl bg-white p-6 shadow-md">
					<h2 className="text-2xl font-bold text-gray-900">New user</h2>
					<a href="/login">
						<button className="w-1/2 mt-4 rounded-md bg-primary p-2 text-white">
							Login
						</button>
					</a>
					<form className="mt-4">
						<div className="mb-4">
							<label className="block text-gray-700">Email</label>
							<input
								type="email"
								className="w-full rounded-md border border-gray-300 p-2"
								placeholder="Enter your email"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700">Password</label>
							<input
								type="password"
								className="w-full rounded-md border border-gray-300 p-2"
								placeholder="Enter your password"
							/>
						</div>
						<button className="w-full rounded-md bg-primary p-2 text-white">
							Create user
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Register
