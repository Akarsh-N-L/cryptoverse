import { useGetCryptosQuery } from "../services/cryptoAPI";
import CoinCard from "./CoinCard";
import millify from "millify";
import { IcryptoCurrencies } from "../utils/interfaces";
import Loader from "./Loader";
import CoinListItem from "./CoinListItem";

export default function CryptoCurrencies(props: IcryptoCurrencies) {
  const { data, isFetching } = useGetCryptosQuery(props.coins);
  const stringifiedData = JSON.stringify(data);
  const cryptosList = data?.data?.coins;
  let cryptos = cryptosList;
  console.log(`Stringified cryptos = ${stringifiedData}`);
  if (isFetching) {
    return <Loader />;
  }
  if (!cryptos) {
    return null;
  }
  return (
    <>
      {props.cards && (
        <div className="flex justify-center flex-col w-full items-center my-14">
          <div className="flex justify-center items-center flex-wrap">
            {cryptos.map((currency: any) => (
              <CoinCard
                icon={currency.iconUrl}
                name={currency.name}
                marketCap={currency.marketCap}
                price={millify(currency.price)}
                dailyChange={currency.change}
              />
            ))}
          </div>
        </div>
      )}
      {!props.cards && (
        <div className="flex justify-center flex-col w-full items-center my-14">
          <div className=" bg-blue-600 text-blue-100 rounded-lg flex justify-center items-center shadow-lg flex-col w-full h-64 mb-10">
            <span className=" my-4 font-medium text-4xl">
              Welcome to the New-Age economy
            </span>
            <div className="flex justify-between my-4 items-center">
              <input
                className=" rounded-3xl shadow-md w-96 pl-4 h-14 text-lg border-2 border-gray-300"
                type="text"
                required
                placeholder="Search for the assets"
              />
              <button></button>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            <div className=" w-full border-t-2 border-b-2 border-blue-200 shadow flex justify-evenly items-center h-12 my-1">
              <div className="w-1/12 justify-center flex text-blue-500 font-semibold text-lg ">
                <span>Crypto</span>
              </div>
              <div className="w-3/12 flex justify-start text-blue-500 font-semibold text-lg">
                <span>Name</span>
              </div>
              <div className="w-2/12 flex justify-center text-blue-500 font-semibold text-lg">
                <span>Price</span>
              </div>
              <div className="w-2/12 flex justify-center text-blue-500 font-semibold text-lg">
                <span>Daily Change</span>
              </div>
              <div className="w-2/12 flex justify-center text-blue-500 font-semibold text-lg">
                <span>Market Cap</span>
              </div>
            </div>
            {cryptos.map((currency: any) => (
              <CoinListItem
                icon={currency.iconUrl}
                name={currency.name}
                marketCap={currency.marketCap}
                price={millify(currency.price)}
                dailyChange={currency.change}
                sparkLine={currency.sparkline}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
