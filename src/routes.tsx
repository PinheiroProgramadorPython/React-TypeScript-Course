import { createBrowserRouter } from "react-router-dom";
import { Frases } from "./pages/frases/Frases";
import { App } from "./App";
import { CardTasks } from "./pages/tasks/CardTasks";
import { Home } from "./pages/home/Home";
import { Fuel } from "./pages/fuel/Fuel";
import { Coin } from "./pages/coins/Coin";
import { DetailCoin } from "./pages/coins/detail/DetailCoin";

export const routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/frases",
                element: <Frases />,
            },
            {
                path: "/tarefas",
                element: <CardTasks />,
            },
            {
                path: "/fuel",
                element: <Fuel />,
            },
            {
                path: "/coin",
                element: <Coin />,
                children: [
                    {
                        path: "detail/:coin",
                        element: <DetailCoin />,
                    },
                ],
            },
        ],
    },
]);
