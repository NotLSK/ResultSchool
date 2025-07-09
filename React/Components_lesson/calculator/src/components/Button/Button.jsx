import styles from './Button.module.scss'

export default function Button({ onClick, children }) {

	let buttonClass = children === '0' ? `${styles.button} ${styles.zero}` : '';
	buttonClass += !Number(children) && children !== '0' ? `${styles.button} ${styles.operation}` : '';

	return (
		<button
			className={`${styles.button} ${buttonClass}`}
			onClick={onClick}>
			{children}
		</button>
	)
}