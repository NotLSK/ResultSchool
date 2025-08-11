import styles from './App.module.scss'
import { TaskList } from './components/TaskList/TaskList'
import { AppContextProvider } from './contexts/AppContextProvider'

const App = () => {

	return (
		<AppContextProvider>
			<div className={styles.todo}>
				<h1 className={styles.header}>JSON Server - TODO</h1>
				<TaskList />
			</div>
		</AppContextProvider>
	)
}

export default App
