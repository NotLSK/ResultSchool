import styles from './FieldLayout.module.scss'

import { valueCheck } from '../../../utils';

export const FieldLayout = ({ field, currentPlayer, onClick, isGameOver }) => {
	return (
		<div className={styles.board}>
			{field.map((item) => {
				return <div
					key={item.id}
					className={`${styles.cell} ${valueCheck(item.value, styles)}`}
					onClick={item.value === '' && !isGameOver ? () => onClick(item.id, currentPlayer) : null}
				>
					{item.value}
				</div>
			})
			}
		</div>
	)
}
