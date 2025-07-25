export const isErrors = (errors) => {
	return !Object.values(errors).every(value => value === '' || value === null);
}

export const isPasswordsMatch = (password, confirm_password) => {
	return confirm_password ? password === confirm_password : true;
}

export const onChangeValidate = (target) => {
	let errorMessage = null;

	if (target.name === 'password') {
		if (/\s/.test(target.value)) {
			errorMessage = 'Пароль не должен содержать пробелов';
		}
	}

	return errorMessage;
}

export const onBlurValidate = (target, password) => {
	let errorMessage = null;

	switch (target.name) {
		case 'email':
			if (target.value.length === 0) {
				errorMessage = 'Поле "Email" не должно быть пустым';
			}
			else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value)) {
				errorMessage = 'Почта должна соответствовать формату some@example.com'
			}
			break;
		case 'password':
			if (target.value.length === 0) {
				errorMessage = 'Поле "Пароль" не должно быть пустым';
			}
			else if (target.value.length < 8) {
				errorMessage = 'Поле "Пароль" должен быть не меньше 8 символов';
			}
			break;
		case 'confirm_password':
			if (password && target.value !== password) {
				errorMessage = 'Пароли не совпадают';
			}
			break;
	}

	return errorMessage;
}
