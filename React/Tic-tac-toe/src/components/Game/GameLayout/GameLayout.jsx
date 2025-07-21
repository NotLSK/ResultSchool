import PropTypes from 'prop-types';

import styles from './GameLayout.module.scss';

import { Information } from '../../Information/Information';
import { Field } from '../../Field/Field';

export const GameLayout = ({ field, currentPlayer, isDraw, isGameOver, setField, setCurrentPlayer, setIsDraw, setIsGameOver, onRestart }) => {

	return (
		<div className={styles.container}>
			<h1>Крестики-нолики</h1>
			<Information
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameOver={isGameOver}
			/>
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setIsDraw={setIsDraw}
				setIsGameOver={setIsGameOver}
				isGameOver={isGameOver}
			/>
			{isGameOver ? <button className={`${styles.button} ${styles.restart}`} onClick={onRestart}> Начать заново</button> : null}
		</div>
	)
}

GameLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.object),
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameOver: PropTypes.bool,
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	setIsDraw: PropTypes.func,
	setIsGameOver: PropTypes.func,
	onRestart: PropTypes.func,
}
