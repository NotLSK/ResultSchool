import styles from './Actions.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { ModalContext } from '../../../contexts/context';

export const Actions = ({ taskId }) => {

	const { toggleModal } = useContext(ModalContext);

	return (
		<div className={styles.actions}>
			<div
				className={`${styles.update} ${styles.action}`}
				title="Редактировать"
				onClick={() => toggleModal('UPDATE', taskId)}
			>
				<FontAwesomeIcon icon={faPencil} />
			</div>
			<div
				className={`${styles.delete} ${styles.action}`}
				title="Удалить"
				onClick={() => toggleModal('DELETE', taskId)}
			>
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
	)
}
