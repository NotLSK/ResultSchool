import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

import { TodoTask } from '../TodoTask/TodoTask';
import { HeaderTools } from '../HeaderTools/HeaderTools';
import { Modal } from '../Modal/Modal';

import styles from './TaskList.module.scss'
import { AddTaskForm } from '../Modal/AddTaskForm/AddTaskForm';


export const TaskList = ({ ...props }) => {

	const [modalTrigger, setModalTrigger] = useState(false);
	const [search, setSearch] = useState('');
	const [isFilterSelected, setIsFilterSelected] = useState(false);

	const {
		tasks,
		isLoading,
		error,
		addNewTask,
		deleteTask,
		getTasks,
	} = props;


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
			return (
				<TodoTask
					key={task.id}
					taskId={task.id}
					taskNumber={index + 1}
					taskTitle={task.title}
					isCompleted={task.completed}
					openModal={toggleModal} />
			)
		}))
	}

	const toggleModal = () => {
		setModalTrigger(!modalTrigger);
	}

	useEffect(() => {
		getTasks();
	}, [getTasks])

	return (
		<>
			{modalTrigger &&
				<Modal closeModal={toggleModal}>
					<AddTaskForm
						addNewTask={addNewTask}
						deleteTask={deleteTask}
						closeModal={toggleModal}
					/>
				</Modal>}
			<div className={styles.header}>
				<h2>Список задач</h2>
				<HeaderTools
					openModal={() => toggleModal()}
					search={search}
					isFilterSelected={isFilterSelected}
					handleFilter={handleFilter}
					handleSearch={handleSearch}
				/>
			</div>
			<div className={styles.taskList}>
				{renderTasks()}
			</div>
		</>
	)
}
