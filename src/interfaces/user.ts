import type { Dispatch, SetStateAction } from "react";

export interface DadosUsuario {
    name: string;
    yearOfBirth?: string | number;
    profession?: string;
}

export interface User {
    user: DadosUsuario | null;
    setUser: Dispatch<SetStateAction<DadosUsuario | null>>;
}

export interface Tasks {
    tasks: string[];
    setTasks: Dispatch<SetStateAction<string[]>>;
    totalTasks: number;
    taskEdition: string;
    setTaskEdition: Dispatch<SetStateAction<string>>;
}

export interface Phrase {
    id: string;
    frase: string;
    autor: string;
}

export interface Phrases {
    phrase: Phrase | null;
    setPhrase: Dispatch<SetStateAction<Phrase | null>>;
    phrases: Phrase[];
    setPhrases: Dispatch<SetStateAction<Phrase[]>>;
}

export interface CardFuel {
    title: string;
    gasolina: string | number;
    alcool: string | number;
}

export interface Fuel {
    fuel: CardFuel | null;
    setFuel: Dispatch<SetStateAction<CardFuel | null>>;
}

export interface Props {
    user: DadosUsuario;
    setUser: Dispatch<SetStateAction<DadosUsuario>>;
    tasks: string[];
    totalTasks: number;
    setTasks: Dispatch<SetStateAction<string[]>>;
    taskEdition: string;
    setTaskEdition: Dispatch<SetStateAction<string>>;
    phrase: Phrase;
    setPhrase: Dispatch<SetStateAction<Phrase>>;
    dados: Phrase[];
    setDados: Dispatch<SetStateAction<Phrase[]>>;
    fuel: CardFuel;
    setFuel: Dispatch<SetStateAction<CardFuel>>;
}

export interface UrlProps {
    url: string;
    accept?: string;
    Authorization?: string;
}

export interface Coin {
    changePercent24Hr: string;
    explorer: string;
    id: string;
    marketCapUsd: string;
    maxSupply: string;
    name: string;
    priceUsd: string;
    rank: string;
    supply: string;
    symbol: string;
    volumeUsd24Hr: string;
    vwap24Hr: string;
    tokens?: Object;
}

export interface Moeda {
    moeda: Coin | null;
    setMoeda: Dispatch<SetStateAction<Coin | null>>;
    formatarMoedaUSD: (valor: number) => string;
    getDetail: (coin: Coin) => void;
}
