export const completedOptions = [
	{ value: true, label: 'Завершена' },
	{ value: false, label: 'Не завершена' }
]

export const selectStyles = {
	control: (provided, state) => ({
		...provided,
		backgroundColor: '#ffffff1a',
		border: 'none',
		boxShadow: state.isFocused ? '0 0 0 2px #ffffff99' : 'none',
		color: 'inherit',
		font: 'inherit',
		minHeight: '38px',
	}),

	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected
			? '#005f8bff'
			: state.isFocused
				? '#ffffff1a'
				: 'transparent',
		color: 'white',
		font: 'inherit',
		cursor: 'pointer',
	}),

	menu: (provided) => ({
		...provided,
		backgroundColor: '#383838',
		border: '1px solid #fffffe4d',
	}),

	singleValue: (provided) => ({
		...provided,
		color: 'white',
	}),
};
