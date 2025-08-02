import styles from './HeaderTools.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faPlus } from "@fortawesome/free-solid-svg-icons";


export const HeaderTools = ({ openModal, search, isFilterSelected, handleFilter, handleSearch }) => {

	return (
		<div className={styles.tools}>
			<input
				type="text"
				id="search"
				name="search"
				value={search}
				onChange={(e) => handleSearch(e.target.value)}
				className={styles.search}
				placeholder='Поиск...'
			/>
			<div className={styles.actions}>
				<span title='Отсортировать' className={isFilterSelected ? styles.filter : null} onClick={handleFilter}><FontAwesomeIcon icon={faSort} /></span>
				<span title='Добавить задачу' onClick={openModal}><FontAwesomeIcon icon={faPlus} /></span>
			</div>
		</div>
	)
}
