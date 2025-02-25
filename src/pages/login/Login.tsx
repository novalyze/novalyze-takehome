import styles from "./Login.module.scss"

export default function () {
	return (
		<>
			<div
				className={`${styles.reveal} flex h-screen items-center justify-center bg-gray-background-dark`}
			>
				<div className="max-w-md rounded-xl bg-white p-6 shadow-md">
					<h2 className="text-2xl font-bold text-gray-900">Login</h2>
					<a href="/register">
						<button
							type="button"
							className="w-1/2 mt-4 rounded-md bg-primary p-2 text-white"
						>
							New user
						</button>
					</a>
					<form className="mt-4">
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-700">
								Email
							</label>
							<input
								name="email"
								type="email"
								className="w-full rounded-md border border-gray-300 p-2"
								placeholder="Enter your email"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="password" className="block text-gray-700">
								Password
							</label>
							<input
								name="password"
								type="password"
								className="w-full rounded-md border border-gray-300 p-2"
								placeholder="Enter your password"
							/>
						</div>
						<button
							type="submit"
							className="w-1/2 rounded-md bg-primary p-2 text-white"
						>
							Login
						</button>
						<button
							type="button"
							className="w-1/2 rounded-md bg-primary p-2 text-white"
						>
							Reset Password
						</button>
						<button
							type="button"
							className="w-full rounded-md bg-primary mt-2 p-2 text-white"
						>
							Sign in with SSO
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
