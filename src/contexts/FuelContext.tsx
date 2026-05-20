import { useState, useEffect, createContext, type ReactNode } from "react"
import type { Fuel, CardFuel } from "../interfaces/user";

const FuelContext = createContext<Fuel | undefined>(undefined);

export function FuelProvider ({children}: {children: ReactNode}) {
    const [fuel, setFuel] = useState<CardFuel | null>(() => {
            const dados = localStorage.getItem("Fuel");
            if(dados){
                return JSON.parse(dados)
            }
            return null
        });
    
        useEffect(() => {
            if(fuel !== null){
                localStorage.setItem("Fuel", JSON.stringify(fuel));
            } else {
                localStorage.removeItem("Fuel")
            }
        }, [fuel]);
    return(
        <FuelContext.Provider value={{fuel, setFuel}}>
            {children}
        </FuelContext.Provider>
    )
} 

export default FuelContext;
