import { useState } from 'react'
import styles from './App.module.scss';
import Button from './components/Button/Button';
import Display from './components/Display/Display';

function App() {

	const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '=', 'C',];

	const [expression, setExpression] = useState('');
	const [result, setResult] = useState('');

	const handleButtonClick = (value) => {
		const isOperator = /[+-]/g.test(value);

		if (isOperator && /[+-]/g.test(expression.slice(-1))) {
			setExpression((prev) => prev.slice(0, -1) + value);
			return;
		}

		setExpression((prev) => prev + value);

		if (result !== '') {
			setResult('');
		}
	}

	const handleResult = () => {
		const operators = expression.match(/[+-]/g);
		const operands = expression.split(/[+-]/).map(Number);
		console.log(operators, operands)
		if (operands?.length <= 1) return;

		let res = operands[0];

		for (let i = 0; i < operands.length; i++) {
			console.log(operators[i], operands[i + 1])
			switch (operators[i]) {
				case '+':
					res += operands[i + 1];
					break;
				case '-':
					res -= operands[i + 1];
					break;
			}
		}

		setResult(res);
	}

	const handleClear = () => {
		setExpression('');
		setResult('');
	}

	const checkSymbol = (symbol) => {
		switch (symbol) {
			case '+':
			case '-':
				handleButtonClick(symbol);
				break;
			case '=':
				handleResult();
				break;
			case 'C':
				handleClear();
				break;
		}
	}



	return (
		<>
			<div className={styles.container}>
				<div className={styles.calculator}>
					<Display expression={expression} result={result} />
					<div className={styles.buttons}>
						<div className={styles.digits}>
							{symbols
								.filter((item) => !isNaN(item) || item === '0')
								.map((value) => <Button key={value} onClick={() => handleButtonClick(value)}>{value}</Button>)}
						</div>
						<div className={styles.operations}>
							{symbols
								.filter((item) => isNaN(item) && item !== '0')
								.map((value) => <Button key={value} onClick={() => checkSymbol(value)}>{value}</Button>)}
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

export default App
