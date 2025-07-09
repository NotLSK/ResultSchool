import { useState } from 'react'
import styles from './App.module.css';
import data from './data.json';

function App() {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	let isStart = activeIndex === 0;
	let isEnd = activeIndex === steps.length - 1;

	const handlePrevious = () => {
		setActiveIndex(activeIndex - 1);
	}

	const handleNext = () => {
		setActiveIndex(activeIndex + 1);
	}

	const handleStartOver = () => {
		setActiveIndex(0);
	}


	return (
		<>
			<div className={styles.container}>
				<div className={styles.card}>
					<h1>Инструкция по готовке пельменей</h1>
					<div className={styles.steps}>
						<div className={styles['steps-content']}>
							{steps[activeIndex].content}
						</div>
						<ul className={styles['steps-list']}>
							{steps.map((item, index) => {
								return (
									<li className={styles['steps-item'] + ' ' + (index <= activeIndex ? styles.done : '') + ' ' + (index === activeIndex ? styles.active : '')} key={item.id}>
										<button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>{index + 1}</button>
										{item.title}
									</li>
								)
							})}
						</ul>
						<div className={styles['buttons-container']}>
							<button className={styles.button} disabled={isStart} onClick={handlePrevious}>Назад</button>
							<button className={styles.button} onClick={isEnd ? handleStartOver : handleNext}>
								{isEnd ? 'Начать сначала' : 'Далее'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
