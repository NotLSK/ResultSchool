import styles from './TodoTask.module.scss'
import { Link } from 'react-router-dom';

export const TodoTask = ({ taskId, taskNumber, taskTitle, isCompleted }) => {

	const isCompletedTask = isCompleted ? styles.completed : styles.uncompleted;

	return (
		<div className={styles.task}>
			<Link to={`/task/${taskId}`}>
				<div className={styles.content}>
					<div className={`${styles.number} ${isCompletedTask}`}>{taskNumber}</div>
					<div className={styles.text}>{taskTitle}</div>
				</div>
			</Link>
		</div>
	)
}
