// import { useEffect, useState } from "react";
import { BarraNavegation } from "./components/BarraNavegation";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
// import type { DadosUsuario } from "./interfaces/user";
// import axios from "axios";
// import type { CardFuel } from "./interfaces/user";
import { AppProvider } from "./contexts/AppContext";
import { TasksProvider } from "./contexts/TasksContext";
import { PhrasesProvider } from "./contexts/PhrasesContext";
import { FuelProvider } from "./contexts/FuelContext";

export function App() {
    // const [user, setUser] = useState<DadosUsuario | undefined>(() => {
    //     try {
    //         const dados: string | null = localStorage.getItem("DadosUsuario");
    //         if (dados) {
    //             return JSON.parse(dados);
    //         }
    //     } catch (error) {
    //         console.error("Erro ao Buscar Dados do Usuario", error)
    //         return undefined;
    //     }
    // });

    // const [tasks, setTasks] = useState<string[] | []>(() => {
    //     try {
    //         const tasksBackup = localStorage.getItem("Tasks");
    //         if (tasksBackup) {
    //             return JSON.parse(tasksBackup);
    //         }
    //         return [];
    //     } catch (error) {
    //         console.error("Erro ao Buscar Dados das Tarefas", error);
    //         return [];
    //     }
    // });

    // const [taskEdition, setTaskEdition] = useState<string>("");

    // const [dados, setDados] = useState<Phrase[]>([]);
    // const [phrase, setPhrase] = useState<Phrase | null>(() => {
    //     const dados = localStorage.getItem("Phrase");
    //     if(dados){
    //         return JSON.parse(dados);
    //     }
    //     return null
    // });

    // const [fuel, setFuel] = useState<CardFuel | null>(() => {
    //     const dados = localStorage.getItem("Fuel");
    //     if(dados){
    //         return JSON.parse(dados)
    //     }
    //     return null
    // });

    // useEffect(() => {
    //     if(fuel !== null){
    //         localStorage.setItem("Fuel", JSON.stringify(fuel));
    //     } else {
    //         localStorage.removeItem("Fuel")
    //     }
    // }, [fuel]);

    // useEffect(() => {
    //     if(phrase !== null){
    //         localStorage.setItem("Phrase", JSON.stringify(phrase));
    //     } else {
    //         localStorage.removeItem("Phrase")
    //     }
    // })

    // useEffect(() => {
    //     try {
    //         async function getDados() {
    //             const response = await axios.get(
    //                 "https://raw.githubusercontent.com/devmatheusguerra/frasesJSON/refs/heads/main/frases.json",
    //             );
    //             console.log(response.data);
    //             setDados(response.data);
    //             return response.data;
    //         }
    //         getDados();
    //     } catch (error) {
    //         console.error(`Erro ao Buscar Frases: ${error} `);
    //     }
    // }, []);

    // useEffect(() => {
    //     try {
    //         const tasksBackup = JSON.stringify(tasks);
    //         localStorage.setItem("Tasks", tasksBackup);
    //     } catch (error) {
    //         console.error("Erro ao Salvar as Tarefas", error)
    //     }
    // }, [tasks]);

    // const totalTasks = useMemo(() => {
    //     try {
    //         return tasks.length;
    //     } catch (error) {
    //         console.error("Erro na Quantidade de Tarefas", error)
    //         return 0
    //     }
    // }, [tasks]);

    // const props = {
    //     // user,
    //     // setUser,
    //     // tasks,
    //     // setTasks,
    //     // taskEdition,
    //     // setTaskEdition,
    //     // totalTasks,
    //     // phrase,
    //     // setPhrase,
    //     // dados,
    //     // fuel,
    //     // setFuel
    // }

    return (
        <AppProvider>
            <TasksProvider>
                <PhrasesProvider>
                    <FuelProvider>
                        <main className="max-w-full min-h-screen p-2 bg-slate-400">
                            <BarraNavegation />
                            <Outlet />
                            <Footer />
                        </main>
                    </FuelProvider>
                </PhrasesProvider>
            </TasksProvider>
        </AppProvider>
    );
}
