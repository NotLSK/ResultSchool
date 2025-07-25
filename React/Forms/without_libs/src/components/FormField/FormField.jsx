import styles from './FormField.module.scss';

export const FormField = ({ type, name, placeholder, labelText, value, onChange, onBlur, error }) => {
	return (
		<div className={styles.item}>
			<label htmlFor={name} className={error ? styles.error : null}>{labelText}</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

