import { useState, type SubmitEvent } from "react";
// import { useOutletContext } from "react-router-dom";
// import type { Props } from "../interfaces/user";
import { useFuel } from "../hooks/useFuel";

export function FormFuel() {
    const [inputA, setInputA] = useState<number | "">("");
    const [inputG, setInputG] = useState<number | "">("");

    // const {fuel, setFuel} = useOutletContext<Props>();
    const { fuel, setFuel } = useFuel();

    const calcular = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputA == "" || inputG == "") {
            localStorage.removeItem("Fuel");
            return alert("Preencha os Dados para fazer o Cálculo");
        }
        const calc = Number(inputA) / Number(inputG);
        if (calc <= 0.7) {
            setFuel({
                title: "Compensa Usar Álcool",
                gasolina: formatarMoeda(inputG),
                alcool: formatarMoeda(inputA),
            });
        } else {
            setFuel({
                title: "Compensa Usar Gasolina",
                gasolina: formatarMoeda(inputG!),
                alcool: formatarMoeda(inputA!),
            });
        }
    };

    function formatarMoeda(valor: number) {
        return valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
    }

    return (
        <section className="flex flex-col items-center justify-center gap-2">
            <div>
                <img
                    src="./src/assets/combustivel.png"
                    alt="logo combustivel"
                    className="cursor-pointer hover:scale-110 transition-transform animate-bounce"
                />
            </div>

            <form className="flex flex-col gap-2" onSubmit={calcular}>
                <label className="text-2xl font-semibold">
                    Álcool(preço por litro)
                </label>
                <input
                    value={inputA}
                    onChange={(e) => setInputA(Number(e.target.value))}
                    type="number"
                    placeholder="4.90"
                    className="border-blue-800 border-2 rounded-md p-1 bg-white"
                />
                <label className="text-2xl font-semibold">
                    Gasolina(preço por litro)
                </label>
                <input
                    value={inputG}
                    onChange={(e) => setInputG(Number(e.target.value))}
                    type="number"
                    placeholder="6.90"
                    className="border-blue-800 border-2 rounded-md p-1 bg-white"
                />
                <button
                    type="submit"
                    className="bg-blue-700 w-fit m-auto p-2 rounded-md text-white font-semibold cursor-pointer"
                >
                    Calcular
                </button>
            </form>
            {fuel && (
                <div className="bg-green-500 text-white flex flex-col items-center justify-center p-2 rounded-md hover:scale-110 cursor-pointer transition-transform animate-pulse">
                    <h2 className="text-3xl font-semibold">{fuel.title}</h2>
                    <span className="flex gap-4">
                        <p>Gasolina:</p> {fuel.gasolina}
                    </span>
                    <span className="flex gap-4">
                        <p>Álcool:</p> {fuel.alcool}
                    </span>
                </div>
            )}
        </section>
    );
}
