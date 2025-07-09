import React from 'react';
import styles from './Display.module.scss'

export default function Display({ expression, result }) {

	const operators = expression.match(/[+-]/g);
	const operands = expression.split(/[+-]/);

	return (
		<div className={styles.display}>
			<div className={styles['expression-wrapper']}>
				<div className={styles.expression}>
					{operands.map((operand, i) => {
						return (
							// плохо key делать как индекс, но тут не критично по идее, т.к. ничего не меняем
							<React.Fragment key={i}>
								{operand !== 0 ? <span className={styles?.operands}>{operand}</span> : ''}
								{operators && <span className={styles.sign}>{operators[i]}</span>}
							</React.Fragment>
						)
					})}
				</div>
			</div>
			<div className={styles['answer-container']} ><span className={styles.answer}>{result}</span></div>
		</div>
	)
}