import styles from './TodoTask.module.scss'

export const TodoTask = ({ taskNumber, taskTitle, isCompleted }) => {

	const isCompletedTask = isCompleted ? styles.completed : styles.uncompleted;

	return (
		<div className={styles.task}>
			<div className={`${styles.number} ${isCompletedTask}`}>{taskNumber}</div>
			<div className={styles.text}>{taskTitle}</div>
		</div>
	)
}
