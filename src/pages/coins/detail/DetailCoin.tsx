import { useOutletContext, useParams } from "react-router-dom";
import type { Moeda } from "../../../interfaces/user";
import { BsArrowRight } from "react-icons/bs";

export function DetailCoin() {
    const { coin } = useParams();
    const { moeda, getDetail } = useOutletContext<Moeda>();

    return (
        <section className="bg-white rounded-md text-black p-2 text-center w-full m-auto">
            <h2 className="text-2xl font-semibold mb-2">
                Detalhes da Moeda {coin}
            </h2>
            <div className="bg-black text-white flex flex-col items-center justify-center rounded-md p-2 font-semibold w-full">
                <img
                    className="w-16 h-16  hover:scale-110"
                    src={`https://assets.coincap.io/assets/icons/${moeda?.symbol.toLowerCase()}@2x.png`}
                    onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        const url1 = `https://assets.coincap.io/assets/icons/${moeda?.id.toLowerCase()}@2x.png`;
                        const url2 = `https://assets.coincap.io/assets/icons/${moeda?.id.toLowerCase()}_auto@2x.png`;
                        const urlGeneric =
                            "https://coincap.io/static/logo_mark.png";
                        if (
                            img.src !== url1 &&
                            img.src !== url2 &&
                            img.src !== urlGeneric
                        ) {
                            img.src = url1;
                        } else if (img.src === url1) {
                            img.src = url2;
                        } else if (img.src === url2) {
                            img.src = urlGeneric;
                        }
                    }}
                    alt="logo da moeda"
                />
                <h2 className="text-white font-bold text-4xl">{moeda?.name}</h2>
                <div className="flex flex-col gap-2 items-center w-full">
                    {Object.entries(moeda!).map(([chave, valor]) => (
                        <p
                            key={chave}
                            className={`flex gap-2 items-center justify-center w-full ${chave === "changePercent24Hr" && Number(valor) < 0 ? "text-red-500" : "text-green-500"}`}
                        >
                            <span className="text-blue-500 text-2xl">
                                {chave}
                            </span>
                            <BsArrowRight className="text-yellow-300" />
                            {(typeof valor === "object" && valor !== null) ||
                            chave === "explorer" ? (
                                <div className="text-xs break-all overflow-hidden">
                                    {JSON.stringify(valor)}
                                </div>
                            ) : (
                                valor
                            )}
                        </p>
                    ))}
                </div>

                <button
                    onClick={() => {
                        if (moeda) {
                            getDetail(moeda);
                        }
                    }}
                    className="bg-blue-800 p-2 m-2 rounded-md text-white cursor-pointer hover:scale-110 hover:bg-gray-500"
                >
                    Voltar para Moedas
                </button>
            </div>
        </section>
    );
}
