import styles from './HeaderTools.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faPlus } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

export const HeaderTools = ({ onOpenModalClick, getTasks }) => {

	const [search, setSearch] = useState('');
	const [isFilterSelected, setIsFilterSelected] = useState(false);
	const debounce = useDebounce(getTasks, 300)


	const handleFilter = () => {
		setIsFilterSelected(!isFilterSelected);
	}

	useEffect(() => {
		getTasks(search.trim().toLowerCase(), isFilterSelected);
	}, [isFilterSelected])

	const handleSearch = (value) => {
		setSearch(value)
		debounce(value.trim().toLowerCase())
	}

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
				<span title='Добавить задачу' onClick={onOpenModalClick}><FontAwesomeIcon icon={faPlus} /></span>
			</div>
		</div>
	)
}
