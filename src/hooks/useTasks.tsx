import { useContext } from "react";
import TasksContext from "../contexts/TasksContext";

export function useTasks() {
    const context = useContext(TasksContext);
    if (context === undefined) {
        throw new Error(
            "Ei! Esqueceste-te de colocar o <TasksProvider> no App.tsx!",
        );
    }
    return context;
}
