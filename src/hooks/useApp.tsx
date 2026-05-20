import { useContext } from "react";
import  AppContext  from "../contexts/AppContext";

export function useApp() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useApp deve ser usado dentro do <AppProvider>");
    }
    return context;
}
