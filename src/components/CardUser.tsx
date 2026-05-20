// import { useOutletContext } from "react-router-dom";
// import type { Props } from "../interfaces/user";
import { useApp } from "../hooks/useApp";


export function CardUser() {
    // const {user} = useOutletContext<Props>();
    const {user} = useApp();
    return (
        <section className="bg-black text-white text-2xl font-semibold p-2 w-fit m-auto mt-2 rounded-md hover:scale-105 transition-transform active:opacity-80 animate-bounce">
            <div className="">
                <div className="flex gap-2">
                    Nome: <h2 className="text-blue-400 animate-pulse">{user?.name}</h2>
                </div>
                <div className="flex gap-2">
                    Idade:
                    <p className="text-yellow-400"> {new Date().getFullYear() - Number(user?.yearOfBirth)}</p>
                </div>
                <div className="flex gap-2">
                    Profissão:
                    <p className="text-green-400 animate-bounce"> {user?.profession}</p>
                </div>
            </div>
        </section>
    );
}
