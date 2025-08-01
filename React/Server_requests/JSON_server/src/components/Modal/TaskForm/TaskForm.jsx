import { useEffect, useState } from 'react'

import styles from '../Modal.module.scss'
import Select from 'react-select';
import { selectStyles, completedOptions } from './Select';


export const TaskForm = ({ closeModal, addNewTask, updateData, mode, taskId, getTask }) => {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		if (mode === 'UPDATE') {
			getTask(taskId)
				.then(({ title, description, completed }) => {
					setTitle(title);
					setDescription(description);
					setCompleted(completed);
				}
				)
		}
	}, [getTask, mode, taskId])

	const handleSubmit = (e) => {
		e.preventDefault();
		switch (mode) {
			case 'ADD':
				addNewTask({ title, description, completed });
				break;
			case 'UPDATE':
				updateData(taskId, { title, description, completed })
		}
		closeModal();
	}

	return (
		<form className={styles.modal} onSubmit={handleSubmit}>
			<h3>{mode === 'ADD' ? 'Добавить задачу' : 'Редактировать задачу'}</h3>
			<div className={styles.formBody}>
				<div className={styles.formField}>
					<label htmlFor="title">Название задачи</label>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Введите название"
						value={title}
						onChange={(e) => setTitle(e.target.value)} />
				</div>

				<div className={styles.formField}>
					<label htmlFor="description">Описание задачи</label>
					<textarea
						type="text"
						id="description"
						name="description"
						placeholder="Введите описание"
						value={description}
						onChange={(e) => setDescription(e.target.value)} />
				</div>

				<div className={styles.formField}>
					<label htmlFor="completed">Статус задачи</label>
					<Select
						styles={selectStyles}
						options={completedOptions}
						value={completedOptions.find(option => option.value === completed)}
						onChange={(selectedOption) => setCompleted(selectedOption.value)}
						isSearchable={false}
					></Select>
				</div>
			</div>

			<div className={styles.buttons}>
				<button type='button' className={styles.close} onClick={closeModal}>Отмена</button>
				<button type='submit' className={styles.add}>{mode === 'ADD' ? 'Добавить' : 'Изменить'}</button>
			</div>
		</form>
	)
}
