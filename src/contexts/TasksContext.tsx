import { useState, useEffect, useMemo, createContext, type ReactNode } from "react";
import type { Tasks } from "../interfaces/user";

const TasksContext = createContext<Tasks | undefined>(undefined);

export function TasksProvider({children}: {children: ReactNode}) {
    const [tasks, setTasks] = useState<string[] | []>(() => {
        try {
            const tasksBackup = localStorage.getItem("Tasks");
            if (tasksBackup) {
                return JSON.parse(tasksBackup);
            }
            return [];
        } catch (error) {
            console.error("Erro ao Buscar Dados das Tarefas", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            const tasksBackup = JSON.stringify(tasks);
            localStorage.setItem("Tasks", tasksBackup);
        } catch (error) {
            console.error("Erro ao Salvar as Tarefas", error);
        }
    }, [tasks]);

    const [taskEdition, setTaskEdition] = useState<string>("");

    const totalTasks = useMemo(() => {
        try {
            return tasks.length;
        } catch (error) {
            console.error("Erro na Quantidade de Tarefas", error);
            return 0;
        }
    }, [tasks]);

    return(
        <TasksContext.Provider value={{tasks, setTasks, totalTasks, taskEdition, setTaskEdition}}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContext;
