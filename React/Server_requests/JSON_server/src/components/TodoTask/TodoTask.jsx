import styles from './TodoTask.module.scss'
import { Actions } from './Actions/Actions';

export const TodoTask = ({ taskId, taskNumber, taskTitle, isCompleted, openModal }) => {

	const isCompletedTask = isCompleted ? styles.completed : styles.uncompleted;

	return (
		<div className={styles.task}>
			<div className={styles.content}>
				<div className={`${styles.number} ${isCompletedTask}`}>{taskNumber}</div>
				<div className={styles.text}>{taskTitle}</div>
			</div>
			<Actions taskId={taskId} openModal={openModal} />
		</div>
	)
}
