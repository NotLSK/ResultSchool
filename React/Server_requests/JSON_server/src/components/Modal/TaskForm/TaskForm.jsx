import { useContext, useEffect, useState } from 'react'

import styles from '../Modal.module.scss'
import Select from 'react-select';
import { selectStyles, completedOptions } from './Select';
import { ModalContext, TasksContext } from '../../../contexts/context';


export const TaskForm = () => {

	const { toggleModal, modalMode, selectedTaskId } = useContext(ModalContext)
	const { addNewTask, updateTask, getTaskById } = useContext(TasksContext);


	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		if (modalMode === 'UPDATE') {
			getTaskById(selectedTaskId)
				.then(({ title, description, completed }) => {
					setTitle(title);
					setDescription(description);
					setCompleted(completed);
				}
				)
		}
	}, [getTaskById, modalMode, selectedTaskId])

	const handleSubmit = (e) => {
		e.preventDefault();
		switch (modalMode) {
			case 'ADD':
				addNewTask({ title, description, completed });
				break;
			case 'UPDATE':
				updateTask(selectedTaskId, { title, description, completed })
		}
		toggleModal();
	}

	return (
		<form className={styles.modal} onSubmit={handleSubmit}>
			<h3>{modalMode === 'ADD' ? 'Добавить задачу' : 'Редактировать задачу'}</h3>
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
				<button type='button' className={styles.close} onClick={toggleModal}>Отмена</button>
				<button type='submit' className={styles.add}>{modalMode === 'ADD' ? 'Добавить' : 'Изменить'}</button>
			</div>
		</form>
	)
}
