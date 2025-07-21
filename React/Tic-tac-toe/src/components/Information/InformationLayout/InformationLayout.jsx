import styles from './InformationLayout.module.scss'

import { valueCheck } from '../../../utils'

export const InformationLayout = ({ currentPlayer, isDraw, isGameOver }) => {

	const infoBlock = (text) => {
		return (
			<div className={styles.result}>
				{text} <span className={`${valueCheck(currentPlayer, styles)}`}>{currentPlayer}</span>
			</div >
		)
	}

	return (
		<>
			{isGameOver && isDraw ? <div className={styles.result}>Ничья</div> : null}
			{isGameOver && !isDraw ? infoBlock('Победа') : null}
			{!isGameOver ? infoBlock('Ход игрока ') : null}
		</>
	)
}
