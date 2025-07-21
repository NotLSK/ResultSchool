import { FieldLayout } from "./FieldLayout/FieldLayout"
import { checkWinner } from "../../utils"


export const Field = ({ field, currentPlayer, setField, setCurrentPlayer, isGameOver, setIsDraw, setIsGameOver }) => {

	const handleClick = (id, value) => {
		if (isGameOver) return null;

		const actualField = field.map(item => {
			return item.id === id && item.value === '' ? { ...item, value } : item
		})

		setField(actualField);

		const result = checkWinner(actualField);
		switch (result) {
			case 'X':
			case 'O':
				setIsGameOver(true);
				break;
			case 'draw':
				setIsGameOver(true)
				setIsDraw(true);
				break;
			default:
				setCurrentPlayer((prev) => prev === 'X' ? 'O' : 'X');
		}
	}

	return (
		<FieldLayout
			field={field}
			currentPlayer={currentPlayer}
			onClick={handleClick}
			isGameOver={isGameOver}
		/>
	)
}
