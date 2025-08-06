import { Link } from 'react-router-dom'
import styles from './TaskNotFound.module.scss'

export const TaskNotFound = () => {
	return (
		<>
			<div className={styles.error}>
				Задача не найдена
			</div>
			<div className={styles.back}><Link to="/">Вернутся к списку задач</Link></div>
		</>
	)
}
