import { useState } from 'react'

import styles from '../Modal.module.scss'
import Select from 'react-select';
import { selectStyles, completedOptions } from '../../../services/Select';


export const AddTaskForm = ({ closeModal, addNewTask }) => {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [completed, setCompleted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewTask({ title, description, completed });
		closeModal();
	}

	return (
		<form className={styles.modal} onSubmit={handleSubmit}>
			<h3>Добавить задачу</h3>
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
						styles={selectStyles()}
						options={completedOptions}
						value={completedOptions.find(option => option.value === completed)}
						onChange={(selectedOption) => setCompleted(selectedOption.value)}
						isSearchable={false}
					></Select>
				</div>
			</div>

			<div className={styles.buttons}>
				<button type='button' className={styles.close} onClick={closeModal}>Отмена</button>
				<button type='submit' className={styles.add}>Добавить</button>
			</div>
		</form>
	)
}
