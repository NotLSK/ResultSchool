import { useCallback, useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL;

export const useData = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const getTasks = useCallback(async (filter = '', sort = false) => {
		const loaderStart = setTimeout(() => {
			setIsLoading(true)
		}, 300)
		try {

			const filterPath = `?title_like=${filter}`;
			const sortPath = sort ? '&_sort=title&_order=asc' : '';
			const response = await fetch(API_URL + filterPath + sortPath);

			if (!response.ok) {
				throw new Error('Failed to load task list. The server responded with an error.');
			}

			let todoTasks = await response.json();

			// if (filter) {
			// 	todoTasks = todoTasks.filter((task) => task.title.toLowerCase().includes(filter))
			// }

			// if (sort) {
			// 	todoTasks = todoTasks.sort((a, b) => a.title.localeCompare(b.title));
			// }

			setData(todoTasks);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false)
			clearTimeout(loaderStart)
		}
	}, []);


	const getTaskById = async (id) => {
		try {
			const response = await fetch(`${API_URL}/${id}`);

			if (!response.ok) {
				throw new Error(`Failed to fetch task with ID: ${id}. The server responded with an error.`);
			}
			const todoTask = await response.json();
			return todoTask;
		} catch (err) {
			setError(err.message);
		}
	}

	const addNewTask = async (payload) => {
		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify(payload),
			})

			if (!response.ok) {
				throw new Error('Failed to add a new task. The server responded with an error.');
			}

			const newTask = await response.json();
			setData(prev => [...prev, newTask]);
		} catch (err) {
			setError(err.message)
		}
	}

	const updateTask = async (id, payload) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify(payload),
			})

			if (!response.ok) {
				throw new Error(`Failed to update task with ID: ${id}. The server responded with an error.`);
			}

			const updatedTask = await response.json();

			setData(prev => prev.map(task => task.id === id ? updatedTask : task));
		} catch (err) {
			setError(err.message)
		}
	}

	const deleteTask = async (id) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error(`Failed to delete task with ID: ${id}. The server responded with an error.`);
			}

			setData(prev =>
				prev.filter((task) => task.id !== id)
			);
		} catch (err) {
			setError(err.message);
		}
	}

	useEffect(() => {
		getTasks();
	}, [getTasks])

	return {
		data,
		isLoading,
		error,
		addNewTask,
		updateTask,
		getTaskById,
		deleteTask,
		getTasks
	}
}
