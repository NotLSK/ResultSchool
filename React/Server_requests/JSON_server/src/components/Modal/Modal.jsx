import { useContext } from 'react';
import { DeleteTask } from './DeleteTask/DeleteTask';
import styles from './Modal.module.scss'
import { TaskForm } from './TaskForm/TaskForm';
import { ModalContext } from '../../contexts/context';

export const Modal = () => {

	const { toggleModal, modalMode } = useContext(ModalContext);

	const isDelete = modalMode === 'DELETE';

	return (
		<>
			<div className={styles.backdrop} onClick={toggleModal}></div>
			{isDelete && <DeleteTask />}
			{!isDelete && <TaskForm />}
		</>


	)
}
