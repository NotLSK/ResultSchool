import { useRef } from 'react';


export const useDebounce = (callback, delay) => {
	const timoutRef = useRef(null);

	return async (...args) => {
		if (timoutRef.current) {
			clearTimeout(timoutRef.current)
		}

		timoutRef.current = setTimeout(await callback(...args), delay)
	}
}
