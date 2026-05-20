import { FormFuel } from "../../components/FormFuel";

export function Fuel () {
    return (
        <section>
            <div className="bg-white p-2 rounded-md w-fit m-auto mb-2 hover:scale-110 cursor-pointer">
                <h2 className="text-3xl font-semibold">
                    Usar Álcool ou Gasolina?
                </h2>
            </div>
            <FormFuel />
        </section>
    );
}
