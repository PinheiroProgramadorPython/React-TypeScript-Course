import { useTasks } from "../hooks/useTasks";

export function TotalTasks() {
    const { totalTasks } = useTasks();
    return (
        <section className="bg-black w-fit m-auto mt-2 p-2 rounded-md hover:scale-110 transition-transform cursor-pointer animate-pulse">
            <div>
                <h2 className="text-white font-semibold text-3xl">
                    Vc tem {totalTasks} Tarefas
                </h2>
            </div>
        </section>
    );
}
