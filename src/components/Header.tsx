// import { useOutletContext } from "react-router-dom";
// import type { Props } from "../interfaces/user";
import { useApp } from "../hooks/useApp";

export function Header() {
    const { user, setUser } = useApp();

    function sair() {
        localStorage.removeItem("DadosUsuario");
        setUser(null);
        alert("Vc esta Saindo...!");    
    }

    

    // const {user, setUser} = useOutletContext<Props>();
    return (
        <section className="w-fit m-auto font-semibold bg-black p-2 rounded-md text-white">
            <h1 className="text-center text-4xl">Bem Vindo ao nosso Site </h1>
            <div className="flex gap-2 justify-between">
                <p className="text-2xl text-center text-blue-400 animate-pulse">{user?.name}</p>
                {user ? (
                    <button
                        onClick={() => sair()}
                        className="text-red-400 cursor-pointer animate-pulse bg-white rounded-md p-2"
                    >
                        Sair
                    </button>
                ) : (
                    <p className="text-red-400 cursor-pointer bg-white animate-pulse rounded-md p-2">Faça login</p>
                )}
            </div>
        </section>
    );
}
