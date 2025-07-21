import { useState } from 'react';

import { GameLayout } from "./GameLayout/GameLayout";

import { fieldInit } from '../../constants'

export const Game = () => {
	const [field, setField] = useState(fieldInit);
	const [isGameOver, setIsGameOver] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState('X');



	const handleReset = () => {
		setField(fieldInit);
		setIsDraw(false);
		setIsGameOver(false);
		setCurrentPlayer('X');
	}


	return (
		<GameLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			setIsDraw={setIsDraw}
			setIsGameOver={setIsGameOver}
			isDraw={isDraw}
			isGameOver={isGameOver}
			onRestart={handleReset}
		/>
	)
}
