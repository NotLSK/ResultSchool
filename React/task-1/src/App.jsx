import { useState } from 'react'
import { createElement } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
Все наши функции это Императивный подход, так как мы описываем логику работы приложения (то есть описываем то что оно должно нам показать),
а в return из App используется декларативный, так как мы просто вызываем функции и ждём от них определённого результата.
Вообще сама по себе функция react.createElement(), я думаю, подразумевает декларативный подход и правильней было бы сказать,
что императивный подход используется под капотом этой функции, а само её использование уже декларативный подход, т.к. мы просто описываем ожидаемый результат.
В конечном итоге весь этот код всё равно представляет из себя декларативный подход, а вся императивность скрыта под капотом реакта.
*/

const App = () => {
	const [count, setCount] = useState(0)

	function getCurrentDateHTML() {
		const currentDate = new Date(Date.now());
		const currentYear = currentDate.getFullYear();

		return createElement(
			'div',
			{ className: 'year' },
			`Current year: ${currentYear}`,
		);
	}

	function getImageBlockHTML() {
		return createElement(
			'div',
			null,
			createElement(
				'a',
				{ href: "https://vite.dev", target: "_blank" },
				createElement(
					'img',
					{ src: viteLogo, className: "logo", alt: "Vite logo" },
				)
			),
			createElement(
				'a',
				{ href: "https://react.dev", target: "_blank" },
				createElement(
					'img',
					{ src: reactLogo, className: "logo react", alt: "React logo" },
				)
			)
		);
	}

	function getHeaderHTML() {
		return createElement(
			'h1',
			null,
			'Vite + React'
		)
	}

	function getCardHTML() {
		const codeBlock = () => {
			return createElement(
				'code',
				null,
				'src/App.jsx'
			)
		}

		return createElement(
			'div',
			{ className: "card" },
			createElement(
				'button',
				{
					onClick: () => {
						setCount((count) => count + 1)
					},
				},
				`count is ${count}`
			),
			createElement(
				'p',
				null,
				'Edit',
				codeBlock(),
				' and save to test HMR',
			)
		);
	}

	function getReadTheDocsHTML() {
		createElement(
			'p',
			{ className: "read-the-docs" },
			'Click on the Vite and React logos to learn more'
		)
	}


	return (
		<>
			{getImageBlockHTML()}
			{getHeaderHTML()}
			{getCardHTML()}
			{getReadTheDocsHTML()}
			{getCurrentDateHTML()}
		</>
	)
}

export default App
