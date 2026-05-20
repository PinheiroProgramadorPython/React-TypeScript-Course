import { createContext, useState, useEffect, type ReactNode } from "react";
import type { Phrases, Phrase } from "../interfaces/user";
import axios from "axios";

const PhrasesContext = createContext<Phrases | undefined>(undefined);

export function PhrasesProvider({ children }: { children: ReactNode }) {
    const [phrases, setPhrases] = useState<Phrase[]>([]);
    const [phrase, setPhrase] = useState<Phrase | null>(() => {
        const dados = localStorage.getItem("Phrase");
        if (dados) {
            return JSON.parse(dados);
        }
        return null;
    });

    useEffect(() => {
        if (phrase !== null) {
            localStorage.setItem("Phrase", JSON.stringify(phrase));
        } else {
            localStorage.removeItem("Phrase");
        }
    },[phrase]);

    useEffect(() => {
        try {
            async function getDados() {
                const response = await axios.get(
                    "https://raw.githubusercontent.com/devmatheusguerra/frasesJSON/refs/heads/main/frases.json",
                );
                console.log(response.data);
                setPhrases(response.data);
                return response.data;
            }
            getDados();
        } catch (error) {
            console.error(`Erro ao Buscar Frases: ${error} `);
        }
    }, []);

    return (
        <PhrasesContext.Provider
            value={{ phrase, setPhrase, phrases, setPhrases }}
        >
            {children}
        </PhrasesContext.Provider>
    );
}

export default PhrasesContext;
