import styles from './App.module.scss'
import { TaskList } from './components/JsonPlaceholderTodo/TaskList'

const App = () => {

	return (
		<>
			<div className={styles.todo}>
				<h1 className={styles.header}>JSON Placeholder - TODO</h1>
				<TaskList />
			</div>
		</>
	)
}

export default App
