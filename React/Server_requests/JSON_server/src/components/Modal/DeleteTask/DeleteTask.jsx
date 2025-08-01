import styles from '../Modal.module.scss'

export const DeleteTask = ({ deleteTask, closeModal, taskId }) => {

	const handleDelete = () => {
		deleteTask(taskId)
		closeModal();
	}

	return (
		<div className={styles.modal}>
			<h3>Удалить задачу</h3>
			<div className={styles.buttons}>
				<button className={styles.close} onClick={closeModal}>Отмена</button>
				<button className={styles.delete} onClick={handleDelete}>Удалить</button>
			</div>
		</div>
	)
}
