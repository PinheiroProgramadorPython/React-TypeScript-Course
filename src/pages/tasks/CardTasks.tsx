// import { useOutletContext } from "react-router-dom";
// import type { Props } from "../../interfaces/user";
import { AddTask } from "../../components/AddTask";
import { TotalTasks } from "../../components/TotalTasks";
import { useTasks } from "../../hooks/useTasks";



export function CardTasks() {
    // const {tasks, totalTasks, setTasks,setTaskEdition, taskEdition} = useOutletContext<Props>();
    const {tasks, setTasks, taskEdition, setTaskEdition} = useTasks();
    function handleEdition(task: string) {
        setTaskEdition(task);
    }

    function handleDelete(task: string) {
        const listaFiltrada = tasks.filter((tarefa) => tarefa !== task);
        setTasks(listaFiltrada)
    }

    

    return (
        <section>
            <AddTask tasks={tasks} setTasks={setTasks} taskEdition={taskEdition} setTaskEdition={setTaskEdition}/>
            {<TotalTasks/>}
            {tasks.length > 0 && <section className="bg-black w-full m-auto flex gap-2 flex-wrap rounded-md mt-2 p-2">
                {tasks &&
                    tasks.map((task, i) => (
                        <div
                            key={i}
                            className=" flex flex-col p-2 hover:scale-105 cursor-pointer transition-transform bg-white rounded-md animate-bounce"
                        >
                            <span className="text-blue-800 text-2xl font-semibold">
                                {task}
                            </span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdition(task)}
                                    className="bg-blue-800 text-white p-2 rounded-md font-semibold cursor-pointer"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(task)}
                                    className="bg-red-800 p-2 rounded-md text-white font-semibold cursor-pointer"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
            </section>}
        </section>
    );
}
