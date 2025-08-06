import { DeleteTask } from './DeleteTask/DeleteTask';
import styles from './Modal.module.scss'
import { AddTaskForm } from './AddTaskForm/AddTaskForm';

export const Modal = ({ closeModal, children }) => {

	return (
		<>
			<div className={styles.backdrop} onClick={closeModal}></div>
			{children}
		</>
	)
}
