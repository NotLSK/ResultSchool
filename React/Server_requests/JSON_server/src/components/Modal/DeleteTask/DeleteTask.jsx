import { useNavigate } from 'react-router-dom';
import styles from '../Modal.module.scss'

export const DeleteTask = ({ deleteTask, closeModal, taskId }) => {

	const navigate = useNavigate();

	const handleDelete = () => {
		deleteTask(taskId)
		closeModal();
		navigate('/')
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
