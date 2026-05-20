import { Link } from "react-router-dom";

export function BarraNavegation() {
    return (
        <section className="bg-black text-white text-4xl font-semibold w-full m-auto p-2 mb-2 rounded-md">
            <h2 className="text-blue-500 text-center mb-4">
                Course React com TypeScript
            </h2>
            <nav className="flex gap-3 justify-center flex-wrap">
                <Link
                    to={"/"}
                    className="bg-white text-black animate-pulse transition-transform hover:scale-110 p-1 rounded-md"
                >
                    Home
                </Link>
                <Link
                    to={"/tarefas"}
                    className="bg-white text-black animate-pulse transition-transform hover:scale-110 p-1 rounded-md"
                >
                    Tarefas
                </Link>
                <Link
                    to={"/frases"}
                    className="bg-white text-black animate-pulse transition-transform hover:scale-110 p-1 rounded-md"
                >
                    Frases
                </Link>
                <Link
                    to={"/fuel"}
                    className="bg-white text-black animate-pulse transition-transform hover:scale-110 p-1 rounded-md"
                >
                    Fuel
                </Link>
                <Link
                    to={"/coin"}
                    className="bg-white text-black animate-pulse transition-transform hover:scale-110 p-1 rounded-md"
                >
                    Coins
                </Link>
            </nav>
        </section>
    );
}
