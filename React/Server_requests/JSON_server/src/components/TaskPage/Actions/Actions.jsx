import { useNavigate } from 'react-router-dom'
import styles from './Actions.module.scss'

export const Actions = ({ isEdit, toggleIsEdit, openModal, handleSubmit }) => {
	const navigate = useNavigate();
	return (
		<>
			{!isEdit &&
				<div className={styles.buttons}>
					<button type='button' className={styles.back} onClick={() => { navigate(-1) }} >Назад</button>
					<button type='button' className={styles.update} onClick={toggleIsEdit} >Редактировать</button>
					<button type='button' className={styles.delete} onClick={openModal}>Удалить</button>
				</div>}
			{isEdit &&
				<div className={styles.buttons}>
					<button type='button' className={styles.close} onClick={toggleIsEdit}>Отмена</button>
					<button type='submit' className={styles.add} onClick={handleSubmit}>Сохранить</button>
				</div>}
		</>
	)
}
