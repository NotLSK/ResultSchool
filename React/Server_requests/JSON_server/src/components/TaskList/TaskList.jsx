import { useContext, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

import { TodoTask } from '../TodoTask/TodoTask';
import { HeaderTools } from '../HeaderTools/HeaderTools';
import { Modal } from '../Modal/Modal';

import styles from './TaskList.module.scss'
import { ModalContext, TasksContext } from '../../contexts/context';

export const TaskList = () => {

	const [search, setSearch] = useState('');
	const [isFilterSelected, setIsFilterSelected] = useState(false);

	const { modalTrigger } = useContext(ModalContext);
	const { data: tasks, isLoading, error, getTasks } = useContext(TasksContext);

	const handleFilter = () => {
		setIsFilterSelected(!isFilterSelected);
		getTasks(search.trim(), !isFilterSelected)
	}

	const debounce = useDebounce(getTasks, 1000)

	const handleSearch = (value) => {
		setSearch(value)
		debounce(value.trim(), isFilterSelected)
	}

	const renderTasks = () => {
		if (isLoading) {
			return (
				<div className={styles.loaderContainer}>
					<div className={styles.loader}></div>
				</div>
			)
		}

		if (error) {
			return <div>{error}</div>
		}

		return (tasks.map((task, index) => {
			return <TodoTask
				key={task.id}
				taskId={task.id}
				taskNumber={index + 1}
				taskTitle={task.title}
				isCompleted={task.completed} />
		}))
	}


	return (
		<div className={styles.container}>
			{modalTrigger && <Modal />}
			<div className={styles.header}>
				<h2>Список задач</h2>
				<HeaderTools
					search={search}
					isFilterSelected={isFilterSelected}
					handleFilter={handleFilter}
					handleSearch={handleSearch}
				/>
			</div>
			<div className={styles.taskList}>
				{renderTasks()}
			</div>
		</div>
	)
}
