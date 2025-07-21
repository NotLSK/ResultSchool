import { InformationLayout } from "../InformationLayout/InformationLayout"


export const Information = ({ currentPlayer, isDraw, isGameOver }) => {
	return (
		<InformationLayout currentPlayer={currentPlayer} isDraw={isDraw} isGameOver={isGameOver} />
	)
}
