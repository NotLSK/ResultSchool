import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { FormField } from '../FormField/FormField'
import { isErrors, sendFormData, authSchema } from '../../services/AuthFormService'

import styles from './Authorization.module.scss'

export const Authorization = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, touchedFields },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirm_password: '',
		},
		resolver: yupResolver(authSchema),
		mode: 'onBlur',
	});

	const submitButtonRef = useRef(null);
	const allFieldsReady = touchedFields.email && touchedFields.password && touchedFields.confirm_password;

	useEffect(() => {
		if (!isErrors(errors) && allFieldsReady) {
			submitButtonRef.current.focus()
		}
	}, [errors, allFieldsReady])

	return (
		<div className={styles.auth}>
			<form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
				<h2 className={styles.header}>Регистрация</h2>
				<FormField
					type={"email"}
					{...register('email')}
					placeholder={'some@example.com'}
					labelText={'Email'}
					error={errors.email?.message}
				/>
				<FormField
					type={"password"}
					{...register('password')}
					placeholder={'Введите пароль'}
					labelText={'Пароль'}
					error={errors.password?.message}
				/>
				<FormField
					type={"password"}
					{...register('confirm_password')}
					placeholder={'Повторите пароль'}
					labelText={'Повторите пароль'}
					error={errors.confirm_password?.message}
				/>
				{errors.global && <div className={styles.errors}>{errors.global}</div>}
				<button ref={submitButtonRef} type="submit" className={styles.submit} disabled={isErrors(errors)}>Зарегистрироваться</button>
			</form>
		</div>
	)
}
