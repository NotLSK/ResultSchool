import { useRef } from 'react'

import { useStore } from '../../hooks/useStore'
import { FormField } from '../FormField/FormField'
import { onBlurValidate, isErrors, onChangeValidate, isPasswordsMatch } from '../../services/AuthFormService'

import styles from './Authorization.module.scss'


export const Authorization = () => {
	const { getState, updateState, updateErrors } = useStore();
	const { email, password, confirm_password, errors } = getState();

	const submitButtonRef = useRef(null);

	const onChange = ({ target }) => {
		updateState(target.name, target.value);

		let errorMessage = onChangeValidate(target);

		if (target.name === 'password') {
			isPasswordsMatch(target.value, confirm_password)
				? updateErrors('confirm_password', '')
				: updateErrors('confirm_password', 'Пароли не совпадают');
		}

		updateErrors(target.name, errorMessage);
		updateErrors('global', '');
	};

	const onBlur = ({ target }) => {
		let errorMessage = onBlurValidate(target, password);

		if (!isErrors(errors) && email && password && confirm_password) {
			submitButtonRef.current.focus()
		}

		updateErrors(target.name, errorMessage);
		updateErrors('global', '');
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (!isErrors(errors) && email && password && confirm_password) {
			console.log(email, password, confirm_password);
		} else {
			updateErrors('global', 'Заполнены не все поля');
		}
	}

	return (
		<div className={styles.auth}>
			<form className={styles.form} onSubmit={onSubmit}>
				<h2 className={styles.header}>Регистрация</h2>
				<FormField
					type={"email"}
					name={"email"}
					value={email}
					placeholder={'some@example.com'}
					labelText={'Email'}
					onChange={onChange}
					onBlur={onBlur}
					error={errors.email}
				/>
				<FormField
					type={"password"}
					name={"password"}
					value={password}
					placeholder={'Введите пароль'}
					labelText={'Пароль'}
					onChange={onChange}
					onBlur={onBlur}
					error={errors.password}
				/>
				<FormField
					type={"password"}
					name={"confirm_password"}
					value={confirm_password}
					placeholder={'Повторите пароль'}
					labelText={'Повторите пароль'}
					onChange={onChange}
					onBlur={onBlur}
					error={errors.confirm_password}
				/>
				{errors.global && <div className={styles.errors}>{errors.global}</div>}
				<button ref={submitButtonRef} type="submit" className={styles.submit} disabled={isErrors(errors)}>Зарегистрироваться</button>
			</form>
		</div>
	)
}
