import styles from './FormField.module.scss';

export const FormField = ({ name, labelText, error, ...props }) => {
	return (
		<div className={styles.item}>
			<label htmlFor={name} className={error ? styles.error : null}>{labelText}</label>
			<input
				name={name}
				id={name}
				{...props}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

