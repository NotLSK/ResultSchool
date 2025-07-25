import { useState } from "react";

const initialState = {
	email: '',
	password: '',
	confirm_password: '',
	errors: {
		email: '',
		password: '',
		confirm_password: '',
		global: '',
	},
}


export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState(prev => ({ ...prev, [fieldName]: newValue }));
		},
		updateErrors: (fieldName, errorMessage) => {
			setState(prev => ({
				...prev,
				errors: {
					...prev.errors,
					[fieldName]: errorMessage
				}
			}))
		}
	}
}
