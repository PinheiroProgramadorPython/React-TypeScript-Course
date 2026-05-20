// import { useOutletContext } from "react-router-dom";
// import type { Props } from "../../interfaces/user";

import { usePhrases } from "../../hooks/usePhrases";

export function Frases() { 
    // const {dados, phrase, setPhrase} = useOutletContext<Props>();

    const {phrase, setPhrase, phrases} = usePhrases();

    function generatePhrase() {
        const i = Math.floor(Math.random() * phrases.length);
        const frase = phrases[i];
        setPhrase(frase);
    }
    return (
        <section className="bg-black flex flex-col items-center w-fit m-auto rounded-md p-2">
            <h2 className="text-4xl text-white font-semibold text-center m-2">
                Gerador de Frases
            </h2>

            {phrase !== null && (
                <div className="w-fit m-auto p-2 text-white">
                    <h3 className="text-2xl text-center text-blue-400">{phrase?.autor}</h3>
                    <p className="text-white">{phrase?.frase}</p>
                </div>
            )}
            <button
                onClick={generatePhrase}
                className="bg-blue-700 p-2 rounded-md text-white font-semibold w-fit m-auto hover:bg-blue-400 cursor-pointer transition-colors"
            >
                Gerar Frase
            </button>
        </section>
    );
}
