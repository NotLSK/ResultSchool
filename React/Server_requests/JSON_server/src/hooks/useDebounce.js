import { useRef } from 'react';


export const useDebounce = (callback, delay) => {
	const timoutRef = useRef(null);

	return (...args) => {
		if (timoutRef.current) {
			clearTimeout(timoutRef.current)
		}

		timoutRef.current = setTimeout(async () => await callback(...args), delay)
	}
}
