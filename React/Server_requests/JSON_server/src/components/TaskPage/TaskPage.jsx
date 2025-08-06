import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { Actions } from './Actions/Actions';
import { DeleteTask } from '../Modal/DeleteTask/DeleteTask';
import { Modal } from '../Modal/Modal';

import styles from './TaskPage.module.scss'
import Select from 'react-select';
import { selectStyles, completedOptions } from '../../services/Select';


export const TaskPage = ({ deleteTask, updateTask, getTaskById }) => {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [completed, setCompleted] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [modalTrigger, setModalTrigger] = useState(false);

	const { id: taskId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getTaskById(taskId)
			.then(({ title, description, completed }) => {
				setTitle(title);
				setDescription(description);
				setCompleted(completed);
			})
			.catch(() => {
				navigate('/task-not-found')
			})
	}, [getTaskById, taskId])

	const handleSubmit = (e) => {
		e.preventDefault();
		updateTask(taskId, { title, description, completed })
		setIsEdit(!isEdit);
	}

	const toggleModal = () => {
		setModalTrigger(!modalTrigger);
	}

	return (
		<>
			{modalTrigger && <Modal closeModal={toggleModal}>
				<DeleteTask deleteTask={deleteTask} closeModal={toggleModal} taskId={taskId} />
			</Modal>}
			<form className={`${styles.taskForm}`} onSubmit={handleSubmit}>
				<h2>Задача {taskId} <br /> {isEdit && '(Режим редактирования)'}</h2>
				<div className={styles.formBody}>
					<div className={styles.formField}>
						<label htmlFor="title">Название задачи</label>
						<input
							className={isEdit ? styles.edit : null}
							type="text"
							id="title"
							name="title"
							placeholder={isEdit ? "Введите название" : null}
							disabled={!isEdit}
							value={title}
							onChange={(e) => setTitle(e.target.value)} />
					</div>

					<div className={styles.formField}>
						<label htmlFor="description">Описание задачи</label>
						<textarea
							className={isEdit ? styles.edit : null}
							type="text"
							id="description"
							name="description"
							placeholder={isEdit ? "Введите описание" : null}
							disabled={!isEdit}
							value={description}
							onChange={(e) => setDescription(e.target.value)} />
					</div>

					<div className={styles.formField}>
						<label htmlFor="completed">Статус задачи</label>
						<Select
							styles={selectStyles(isEdit)}
							className={isEdit && styles.edit}
							options={completedOptions}
							isDisabled={!isEdit}
							value={completedOptions.find(option => option.value === completed)}
							onChange={(selectedOption) => setCompleted(selectedOption.value)}
							isSearchable={false}
						></Select>
					</div>

					<Actions
						isEdit={isEdit}
						toggleIsEdit={() => setIsEdit(!isEdit)}
						handleSubmit={handleSubmit}
						openModal={toggleModal}
					/>
				</div>
			</form>
		</>
	)
}
