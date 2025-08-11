import { useContext } from 'react'
import styles from '../Modal.module.scss'
import { ModalContext, TasksContext } from '../../../contexts/context'

export const DeleteTask = () => {

	const { toggleModal, selectedTaskId } = useContext(ModalContext);
	const { deleteTask } = useContext(TasksContext);

	const handleDelete = () => {
		deleteTask(selectedTaskId)
		toggleModal();
	}

	return (
		<div className={styles.modal}>
			<h3>Удалить задачу</h3>
			<div className={styles.buttons}>
				<button className={styles.close} onClick={toggleModal}>Отмена</button>
				<button className={styles.delete} onClick={handleDelete}>Удалить</button>
			</div>
		</div>
	)
}
