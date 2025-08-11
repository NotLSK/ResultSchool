import { useData } from "../hooks/useData";
import { TasksContext } from "./context";

export const TasksContextProvider = ({ children }) => {
	const taskValue = useData();

	return (
		<TasksContext value={taskValue}>
			{children}
		</TasksContext>
	)
}
