import logo from "../../img/icon.png"
import styles from "./Header.module.scss"

export default function () {
	return (
		<header className={styles.header}>
			<img alt="Novalyze" src={logo} />

			<div>
				<a href="/">Home</a>
				<a href="/login">
					Log in <span aria-hidden="true">&rarr;</span>
				</a>
			</div>
		</header>
	)
}
