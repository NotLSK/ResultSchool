import { Route, Routes, Navigate } from 'react-router-dom'
import styles from './App.module.scss'
import { TaskList } from './components/TaskList/TaskList'
import { TaskPage } from './components/TaskPage/TaskPage'
import { useData } from './hooks/useData'
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { TaskNotFound } from './components/TaskNotFound/TaskNotFound'

const App = () => {

	const {
		data: tasks,
		isLoading,
		error,
		addNewTask,
		updateTask,
		getTaskById,
		deleteTask,
		getTasks,
	} = useData();

	return (
		<div className={styles.todo}>
			<Routes>
				<Route
					path="/"
					element={
						<TaskList
							tasks={tasks}
							isLoading={isLoading}
							error={error}
							addNewTask={addNewTask}
							deleteTask={deleteTask}
							getTasks={getTasks}
						/>}
				/>
				<Route
					path="/task/:id"
					element={
						<TaskPage
							deleteTask={deleteTask}
							updateTask={updateTask}
							getTaskById={getTaskById}
						/>}
				/>
				<Route path="/task-not-found" element={<TaskNotFound />} />
				<Route path="/404" element={<PageNotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	)
}

export default App
