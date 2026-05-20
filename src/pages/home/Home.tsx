import { CardUser } from "../../components/CardUser";
import { DadosForm } from "../../components/DadosForm";
import { Header } from "../../components/Header";
import { useApp } from "../../hooks/useApp";
// import { useOutletContext } from "react-router-dom";
// import type { Props } from "../../interfaces/user";

export function Home() {
    // const { user } = useOutletContext<Props>();
    const {user} = useApp();
    return (
        <section>
            <Header />
            {user === null && <DadosForm />}
            {user !== null && <CardUser />}
        </section>
    );
}
