import { useState } from 'react'
import styles from './TaskList.module.scss'
import { useEffect } from 'react';
import { TodoTask } from '../TodoTask/TodoTask';

export const TaskList = () => {

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((todos) => setProducts(todos))
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2>Список задач</h2>
			</div>
			<div className={styles.taskList}>
				{isLoading ?
					<div className={styles.loaderContainer}>
						<div className={styles.loader}></div>
					</div>
					:
					products.map((task, index) => {
						return <TodoTask key={task.id} taskNumber={index + 1} taskTitle={task.title} isCompleted={task.completed} />
					})}
			</div>
		</div>
	)
}
