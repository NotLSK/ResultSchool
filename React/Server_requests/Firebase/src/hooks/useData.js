import { useCallback, useEffect, useState } from "react";
import { ref, get, push, set, remove } from 'firebase/database';
import { db } from '../firebase';

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
			const snapshot = await get(ref(db, 'todos'))

			let todoTasks = Object.entries(snapshot.val() ?? []).map(([id, value]) => ({ ...value, id }));

			if (filter) {
				todoTasks = todoTasks.filter((task) => task.title.toLowerCase().includes(filter))
			}

			if (sort) {
				todoTasks = todoTasks.sort((a, b) => a.title.localeCompare(b.title));
			}

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
			const snapshot = await get(ref(db, `todos/${id}`))

			if (!snapshot.exists()) {
				throw new Error(`Task with ID: ${id} doesn't exists.`);
			}

			const todoTask = { ...snapshot.val(), id };

			return todoTask;
		} catch (err) {
			setError(err.message);
		}
	}

	const addNewTask = async (payload) => {
		try {
			const newTask = await push(ref(db, 'todos'), payload)
			setData(prev => [...prev, { ...payload, id: newTask.key }]);
		} catch (err) {
			setError(err.message)
		}
	}

	const updateTask = async (id, payload) => {
		try {
			await set(ref(db, `todos/${id}`), payload)

			setData(prev => prev.map(task => task.id === id ? { ...payload, id } : task));
		} catch (err) {
			setError(err.message)
		}
	}

	const deleteTask = async (id) => {
		try {
			await remove(ref(db, `todos/${id}`))

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
