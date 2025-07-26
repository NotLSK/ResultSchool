import * as yup from 'yup'

export const isErrors = (objectErrors) => {
	return Object.keys(objectErrors).length !== 0
}

export const sendFormData = (formData) => {
	console.log(formData);
};

export const authSchema = yup
	.object()
	.shape({
		email: yup.string()
			.required('Поле "Email" не должно быть пустым')
			.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Почта должна соответствовать формату some@example.com'),

		password: yup.string()
			.required('Поле "Пароль" не должно быть пустым')
			.min(8, 'Поле "Пароль" должен быть не меньше 8 символов')
			.matches(/^\S*$/, 'Пароль не должен содержать пробелов'),
		confirm_password: yup.string()
			.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
	})
	.required()
