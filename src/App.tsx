import AppRouter from "./routes/Router"
import styles from "./App.module.scss"
import { Header } from "./components"

const App = () => (
	<div className={styles.app}>
		<Header />
		<div className={styles.viewport}>
			<AppRouter />
		</div>
	</div>
)

export default App
