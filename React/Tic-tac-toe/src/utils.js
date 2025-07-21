import { WIN_PATTERNS } from './constants'

export const valueCheck = (value, styles) => {
	return value !== '' ? (value === 'X' ? styles.X : styles.O) : null
}

export const checkWinner = (actualField) => {
	for (const win of WIN_PATTERNS) {
		let res = [];
		for (const item of actualField) {

			if (win.includes(item.id)) {
				res.push(item.value)
			}
		}

		if (res.every(item => item === 'X')) return 'X'
		if (res.every(item => item === 'O')) return 'O'
	}

	if (actualField.every(item => item.value !== '')) return 'draw'


	return false
}
