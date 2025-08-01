import styles from './Actions.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

export const Actions = ({ taskId, openModal }) => {
	return (
		<div className={styles.actions}>
			<div
				className={`${styles.update} ${styles.action}`}
				title="Редактировать"
				onClick={() => openModal('UPDATE', taskId)}
			>
				<FontAwesomeIcon icon={faPencil} />
			</div>
			<div
				className={`${styles.delete} ${styles.action}`}
				title="Удалить"
				onClick={() => openModal('DELETE', taskId)}
			>
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
	)
}
