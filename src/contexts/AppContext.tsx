import { createContext, useState, type ReactNode } from "react";
import type { DadosUsuario, User } from "../interfaces/user";

const AppContext = createContext<User | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<DadosUsuario | null>(() => {
        try {
            const dados: string | null = localStorage.getItem("DadosUsuario");
            if (dados) {
                return JSON.parse(dados);
            }
            return null;
        } catch (error) {
            console.error("Erro ao Buscar Dados do Usuario", error);
            return null;
        }
    });

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
