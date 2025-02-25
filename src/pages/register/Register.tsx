import styles from "./Register.module.scss"

export default function () {
	return (
		<div className={`${styles.reveal} ${styles.register}`}>
			<div className="max-w-md rounded-xl bg-white p-6 shadow-md">
				<h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>

				<form className="mt-4 pt-2">
					<input
						name="email"
						type="email"
						className="w-full rounded-md border border-gray-300 p-2 mb-2"
						placeholder="Enter your email"
					/>
					<input
						name="password"
						type="password"
						className="w-1/2 rounded-md border border-gray-300 p-2 mb-4"
						placeholder="Enter your password"
					/>

					<div>
						<button type="button">Login</button>
						<button type="button">Sign in with SSO</button>
					</div>

					<div className="mt-3">
						<a className="alternate" href="/login">
							Log in with existing credentials
						</a>
					</div>
				</form>
			</div>
		</div>
	)
}
