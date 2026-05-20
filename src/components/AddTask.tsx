import {
    useState,
    type Dispatch,
    type SubmitEvent,
    type SetStateAction,
    useRef,
    useEffect,
} from "react";

interface Props {
    tasks: string[];
    taskEdition: string;
    setTasks: Dispatch<SetStateAction<string[]>>;
    setTaskEdition: Dispatch<SetStateAction<string>>;
}

export function AddTask({
    tasks,
    taskEdition,
    setTasks,
    setTaskEdition,
}: Props) {
    const [task, setTask] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    function addTask(e?: SubmitEvent<HTMLFormElement>) {
        if (e) e.preventDefault();
        if (task.trim() === "") return;
        if (taskEdition !== "") {
            setTasks((tasks) => {
                return tasks.map((item) => {
                    if (item === taskEdition) {
                        return task;
                    } else {
                        return item;
                    }
                });
            });
            setTask("");
            setTaskEdition("");
            alert("Tarefa Editada com Sucess!");
            return tasks;
        }
        setTasks((tasks) => [...tasks, task]);
        setTask("");
        setTaskEdition("");
        alert("Tarefa salva com Sucess!");
        return tasks;
    }

    useEffect(() => {
        if (taskEdition !== "") {
            setTask(taskEdition);
            inputRef.current?.focus();
        }
    }, [taskEdition]);

    return (
        <section className="bg-black text-white rounded-md p-2 w-fit m-auto mt-2">
            <h2 className="text-3xl font-semibold text-center m-2">
                Adicionar Tarefa
            </h2>
            <form onSubmit={addTask} className="flex align-middle">
                <input
                    ref={inputRef}
                    className="border-blue-200 border-2 rounded-md p-2"
                    type="text"
                    placeholder="Digite uma Tarefa"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-2xl font-semibold bg-blue-700 rounded-md p-2 m-2 cursor-pointer animate-pulse hover:scale-105"
                >
                    {taskEdition === "" ? "Adicionar Tarefa" : "Editar Tarefa"}
                </button>
            </form>
        </section>
    );
}
