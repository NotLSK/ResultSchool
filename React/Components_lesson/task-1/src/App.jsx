import { useState } from 'react'
import styles from './App.module.css';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValueValid] = useState(false);

	const currentTime = new Date().toLocaleString("ru-RU").replace(',', '');

	const onInputButtonClick = () => {
		const promtValue = prompt('Введите значение');
		if (promtValue?.length >= 3) {
			setValue(promtValue);
			setError('');
			setIsValueValid(true);
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValueValid(false);
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid) {
			const id = Date.now();
			setList([...list, { id, value }]);
			// setList(prevList => [...prevList, {id, value}])
			setValue('');
			// setError('');
		}
	}

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>Текущее знеачение
					<code> value</code>: "<output className={styles['current-value']}>{value}</output>"
				</p>
				{error && <div className={styles.error}>{error}</div>}
				<div className={styles['buttons-container']}>
					<button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
					<button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>Добавить в список</button>
				</div>
				<div className={styles['list-container']}>
					<h2 className={styles['list-heading']}>Список:</h2>
					{list.length === 0 && <p className={styles['no-margin-text']}>Нет добавленных элементов</p>}
					{list.length !== 0 && <ul className={styles.list}>
						{list.map(({ id, value }) => <li className={styles['list-item']} key={id}>Значение: {value} <br /> Время: {currentTime} </li>)}
					</ul>
					}

				</div>
			</div>
		</>
	)
}

export default App
