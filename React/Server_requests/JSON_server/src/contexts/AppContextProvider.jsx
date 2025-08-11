import { ModalContextProvider } from "./ModalContextProvider"
import { TasksContextProvider } from "./TasksContextProvider"

export const AppContextProvider = ({ children }) => {



	return (
		<TasksContextProvider>
			<ModalContextProvider>
				{children}
			</ModalContextProvider>
		</TasksContextProvider>
	)
}
