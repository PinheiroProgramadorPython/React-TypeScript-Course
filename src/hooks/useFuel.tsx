import { useContext } from "react";
import FuelContext from "../contexts/FuelContext";

export function useFuel() {
    const context = useContext(FuelContext);
    if (context === undefined) {
        throw new Error(
            "Ei! Esqueceste-te de colocar o <FuelProvider> no App.tsx!",
        );
    }
    return context;
}
