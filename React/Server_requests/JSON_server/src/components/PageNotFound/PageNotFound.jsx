import { Link } from 'react-router-dom'
import styles from './PageNotFound.module.scss'

export const PageNotFound = () => {

	return (
		<>
			<div className={styles.error}>
				Такой страницы не существует
			</div>
			<div className={styles.back}><Link to="/">Вернутся на главную</Link></div>
		</>
	)
}
