import { useState, type SubmitEvent } from "react";
import { useApp } from "../hooks/useApp";
// import type { Props } from "../interfaces/user";
// import { useOutletContext } from "react-router-dom";

export function DadosForm() {
    // const { user, setUser } = useOutletContext<Props>();
    const {user, setUser} = useApp();
    const [userInput, setUserInput] = useState({
        name: user?.name ?? "",
        yearOfBirth: user?.yearOfBirth ?? "",
        profession: user?.profession ?? "",
    });

    const salvar = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("DadosUsuario", JSON.stringify(userInput));
        setUser(userInput);
        console;
        alert("Login feito com Sucess");
    };
    return (
        <section className="bg-slate-100 w-fit m-auto rounded-md p-2 mt-2 font-semibold">
            <h2 className="text-3xl font-semibold text-blue-800">
                Digite seus Dados e Faça login
            </h2>
            <form onSubmit={salvar}>
                <div>
                    <label>Digite o seu Nome:</label>
                    <input
                        value={userInput?.name ?? ""}
                        onChange={(e) =>
                            setUserInput((user) => ({
                                ...user,
                                name: e.target.value,
                            }))
                        }
                        type="text"
                        className="border-blue-200 border-2 rounded-md m-2"
                    />
                </div>
                <div>
                    <label>Digite o Ano que Vc Nasceu:</label>
                    <input
                        value={userInput?.yearOfBirth}
                        onChange={(e) => {
                            setUserInput((user) => ({
                                ...user,
                                yearOfBirth: Number(e.target.value),
                            }));
                        }}
                        type="number"
                        placeholder="1900"
                        className="border-blue-200 border-2 rounded-md m-2"
                    />
                </div>
                <div>
                    <label>Digite sua Profissão:</label>
                    <input
                        value={userInput?.profession}
                        onChange={(e) =>
                            setUserInput((user) => ({
                                ...user,
                                profession: e.target.value,
                            }))
                        }
                        type="text"
                        className="border-blue-200 border-2 rounded-md m-2"
                    />
                </div>
                <div className="w-fit m-auto">
                    <button
                        type="submit"
                        className="bg-blue-800 p-2 rounded-md text-white cursor-pointer"
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </section>
    );
}
