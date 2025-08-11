import { useState } from "react";
import { ModalContext } from "./context";

export const ModalContextProvider = ({ children }) => {
	const [modalTrigger, setModalTrigger] = useState(false);
	const [modalMode, setModalMode] = useState('ADD');
	const [selectedTaskId, setSelectedTaskId] = useState(null);

	const toggleModal = (mode, id = null) => {
		setModalMode(mode);
		setSelectedTaskId(id);
		setModalTrigger(!modalTrigger);
	}

	return (
		<ModalContext value={{ modalTrigger, modalMode, selectedTaskId, toggleModal }}>
			{children}
		</ModalContext>
	)
}
