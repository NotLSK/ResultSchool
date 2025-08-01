import { DeleteTask } from './DeleteTask/DeleteTask';
import styles from './Modal.module.scss'
import { TaskForm } from './TaskForm/TaskForm';

export const Modal = ({ mode, closeModal, deleteTask, taskId, ...props }) => {

	const isDelete = mode === 'DELETE';

	return (
		<>
			<div className={styles.backdrop} onClick={closeModal}></div>
			{isDelete && <DeleteTask deleteTask={deleteTask} closeModal={closeModal} taskId={taskId} />}
			{!isDelete && <TaskForm mode={mode} closeModal={closeModal} taskId={taskId} {...props} />}
		</>


	)
}
