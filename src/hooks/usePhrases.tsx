import { useContext } from "react";
import PhrasesContext from "../contexts/PhrasesContext";

export function usePhrases() {
    const context = useContext(PhrasesContext);
    if (context === undefined) {
        throw new Error(
            "Ei! Esqueceste-te de colocar o <PhrasesProvider> no App.tsx!",
        );
    }
    return context;
}
