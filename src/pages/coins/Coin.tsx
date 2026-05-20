import axios from "axios";
import { useEffect, useState, type SubmitEvent } from "react";
import type { Coin, UrlProps } from "../../interfaces/user";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";

export function Coin() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [moeda, setMoeda] = useState<Coin | null>(null);
    const [inputForm, setInputForm] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getCoins();
    }, []);

    useEffect(() => {
        if(location.pathname === "/coin"){
            setMoeda(null)
        }
    },[location.pathname])

    const req: UrlProps = {
        url: `https://rest.coincap.io/v3/assets`,
        headers: {
            accept: `application/json`,
            Authorization: `Bearer d329710a9b227379d797095749cecdcddcc3eeec405c166e73a92fcffc643235`,
        }
    };

    async function getCoins() {
        try {
            const reponse = await axios.get(req.url, {
                headers: req.headers
            });
            console.log(reponse.data.data);
            setCoins(
                reponse.data.data.map((coin: Coin) => {
                    const priceFormated = Intl.NumberFormat("en-ES", {
                        style: "currency",
                        currency: "USD",
                        notation: "compact",
                    });
                    const moedaFormated = { ...coin };
                    if (moedaFormated !== null) {
                        moedaFormated.vwap24Hr = formatarMoedaUSD(
                            Number(moedaFormated.vwap24Hr),
                        );
                        moedaFormated.priceUsd = formatarMoedaUSD(
                            Number(moedaFormated.priceUsd),
                        );
                        moedaFormated.marketCapUsd = priceFormated.format(
                            Number(moedaFormated.marketCapUsd),
                        );
                        moedaFormated.volumeUsd24Hr = priceFormated.format(
                            Number(moedaFormated.volumeUsd24Hr),
                        );
                        moedaFormated.supply = priceFormated.format(
                            Number(moedaFormated.supply),
                        );
                        moedaFormated.maxSupply = priceFormated.format(
                            Number(moedaFormated.maxSupply),
                        );
                        moedaFormated.changePercent24Hr = Number(
                            moedaFormated.changePercent24Hr,
                        ).toFixed(3);
                    }
                    return moedaFormated;
                }),
            ); 
        } catch (error) {
            console.error("Erro ao buscar Moedas da API", error)
        } finally{
            setLoading(false)
        }         
    }

    function formatarMoedaUSD(valor: number) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "USD",
        });
    }

    function getDetail(coin: Coin) {
        if(moeda === null){
            setMoeda(coin);
            navigate(`detail/${coin.id}`);
        } else {
            setMoeda(null);
            navigate(`/coin`);
        }       
    }

    function pesquisar(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const coinFiltered = coins.find((coin) => coin.name.toLowerCase() === inputForm.toLowerCase());
        if(coinFiltered){getDetail(coinFiltered!); return}
        alert("Moeda não foi Encontrada!\nVerifique o nome Digitado e tente Novamente!")
    }

    return (
        <main className="bg-black rounded-md p-2">
            {moeda === null && <form
                onSubmit={(e) => pesquisar(e)}
                className="flex gap-2 w-fit m-auto mb-2 bg-white rounded-md p-2"
            >
                <input
                    value={inputForm}
                    onChange={(e) => setInputForm(e.target.value.trim())}
                    type="text"
                    placeholder="bitcoin"
                    className="border-2 border-black p-2 rounded-md"
                />
                <button className="bg-black text-white px-2 rounded-md font-semibold cursor-pointer hover:bg-slate-700">
                    Pesquisar
                </button>
            </form>}
            {loading && <AiFillDollarCircle className="text-white text-4xl w-full m-auto h-48 animate-spin" />}
            {moeda === null && <section className="flex flex-wrap items-center justify-center gap-3 p-2 rounded-md w-full">
                {coins.length > 0 &&
                    coins.map((coin) => (
                        <div
                            key={coin.id}
                            className="bg-white rounded-md p-2 font-semibold cursor-pointer hover:scale-110 w-fit h-fit"
                        >
                            <img
                                className="w-16 h-16"
                                src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                                onError={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    const url1 = `https://assets.coincap.io/assets/icons/${coin.id.toLowerCase()}@2x.png`;
                                    const url2 = `https://assets.coincap.io/assets/icons/${coin.id.toLowerCase()}_auto@2x.png`;
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
                            <h2>{coin.name}</h2>
                            <span className="text-blue-500">
                                <strong className="text-black">Symbol: </strong>
                                {coin.symbol}
                            </span>
                            <p className="text-green-500">
                                <strong className="text-black">Price: </strong>
                                {coin.priceUsd}
                            </p>
                            <button
                                onClick={() => getDetail(coin)}
                                className="bg-gray-500 px-2 rounded-md text-white cursor-pointer hover:scale-110"
                            >
                                Detalhes
                            </button>
                        </div>
                    ))}
            </section>}
            {moeda !== null && <Outlet context={{moeda, setMoeda, formatarMoedaUSD, getDetail}}/>}
        </main>
    );
}
