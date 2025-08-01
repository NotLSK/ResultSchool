import { useState } from 'react';
import { useData } from '../../hooks/useData';

import { TodoTask } from '../TodoTask/TodoTask';
import { HeaderTools } from '../HeaderTools/HeaderTools';
import { Modal } from '../Modal/Modal';

import styles from './TaskList.module.scss'

export const TaskList = () => {

	const [modalTrigger, setModalTrigger] = useState(false);
	const [modalMode, setModalMode] = useState('ADD');
	const [selectedTaskId, setSelectedTaskId] = useState(null);

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
				isCompleted={task.completed}
				openModal={toggleModal} />
		}))
	}


	const toggleModal = (mode, id = null) => {
		setModalMode(mode);
		setSelectedTaskId(id);
		setModalTrigger(!modalTrigger);
	}

	return (
		<div className={styles.container}>
			{modalTrigger && <Modal
				closeModal={toggleModal}
				addNewTask={addNewTask}
				updateData={updateTask}
				mode={modalMode}
				taskId={selectedTaskId}
				getTask={getTaskById}
				deleteTask={deleteTask}
			/>}
			<div className={styles.header}>
				<h2>Список задач</h2>
				<HeaderTools onOpenModalClick={() => toggleModal('ADD')} getTasks={getTasks} />
			</div>
			<div className={styles.taskList}>
				{renderTasks()}
			</div>
		</div>
	)
}
