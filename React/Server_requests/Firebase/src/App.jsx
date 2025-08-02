import styles from './App.module.scss'
import { TaskList } from './components/TaskList/TaskList'

const App = () => {

	return (
		<>
			<div className={styles.todo}>
				<h1 className={styles.header}>JSON Server - TODO</h1>
				<TaskList />
			</div>
		</>
	)
}

export default App
