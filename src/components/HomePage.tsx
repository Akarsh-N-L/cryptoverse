import React from "react";
import CurrCardHome from "./CurrCardHome";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import millify from "millify";
import CryptoCurrencies from "./CryptoCurrencies";
import Loader from "./Loader";
import News from "./News";

export default function HomePage() {
  const cryptoImage = require("../images/Screenshot 2023-12-28 at 10.37.54 PM.png");
  const statsImage = require("../images/Screenshot 2023-12-28 at 11.18.12 PM.png");
  const totalCryptosImage = require("../images/Screenshot 2023-12-28 at 11.50.57 PM.png");
  const totalExchangeImage = require("../images/Screenshot 2023-12-28 at 11.53.11 PM.png");
  const totalMarketCapImage = require("../images/Screenshot 2023-12-28 at 11.57.07 PM.png");
  const totalVolumeImage = require("../images/Screenshot 2023-12-28 at 11.58.29 PM.png");

  const { data, isFetching } = useGetCryptosQuery(10);
  const stringifiedData = JSON.stringify(data);
  const globalStats = data?.data?.stats;
  console.log(`data = ${stringifiedData}`);

  if (isFetching) {
    <Loader />;
  }

  return (
    <>
      <div className="flex justify-center flex-col w-full items-center">
        <div className="flex justify-center items-center my-32 px-5">
          <div className=" flex justify-center items-center w-6/12">
            <img className="w-7/12 max-w-3xl h-auto" src={cryptoImage} alt="" />
          </div>
          <div className="flex justify-center items-center w-6/12 flex-col">
            <span className=" text-5xl font-semibold text-slate-800">
              Welcome to the future of money
            </span>
            <br />
            <span className="text-xl font-medium text-slate-600">
              Explore crypto like Bitcoin, Ethereum, Dogecoin and many more...
            </span>
            <br />
            <br />
            <div className=" flex items-center justify-start w-full">
              <Link
                to="/cryptocurrencies"
                className=" text-md shadow-lg bg-blue-600 text-white rounded-3xl py-2 px-8 mx-4 w-36 flex justify-center items-center"
              >
                Explore
              </Link>
              <Link
                to="/news"
                className=" text-md shadow-lg bg-blue-600 text-white rounded-3xl py-2 px-8 mx-4 w-36 flex justify-center items-center"
              >
                News
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-32 px-5">
          <div className="flex justify-center items-center flex-col w-6/12">
            <span className=" text-4xl font-semibold text-slate-600">
              Today's Crypto stats
            </span>
            <br />
            <div className="flex justify-evenly items-center">
              <CurrCardHome
                image={totalCryptosImage}
                stat="Total cryptos"
                value={millify(globalStats?.totalCoins)}
              />
              <CurrCardHome
                image={totalExchangeImage}
                stat="Total exchanges"
                value={globalStats?.totalExchanges}
              />
            </div>
            <div className="flex justify-evenly items-center">
              <CurrCardHome
                image={totalMarketCapImage}
                stat="Total market cap"
                value={millify(globalStats?.totalMarketCap)}
              />
              <CurrCardHome
                image={totalVolumeImage}
                stat="Total 24hr volume"
                value={millify(globalStats?.total24hVolume)}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center 7/12">
            <img className="w-8/12 max-w-3xl h-auto" src={statsImage} alt="" />
          </div>
        </div>
        <div className=" mb-24 bg-blue-50 py-10 px-3 rounded-2xl">
          <div className=" text-5xl text-blue-500 font-bold flex justify-evenly items-center flex-col h-28">
            <span>Top coins</span>
            <span className=" text-base text-slate-500 font-semibold">
              here is a list of top 10 cryptos based on market cap..
            </span>
          </div>
          <CryptoCurrencies coins={10} cards={true} />
          <div className=" w-full flex justify-center">
            <Link
              to="/cryptocurrencies"
              className=" text-lg bg-blue-600 text-white font-semibold rounded-3xl py-3 px-12 mx-4 w-64 flex justify-center shadow-lg items-center"
            >
              See More Crypto!
            </Link>
          </div>
        </div>
        <div className=" mb-24 flex justify-evenly items-center w-full flex-col">
          <div className="">
            <span className="text-5xl text-blue-500 font-bold flex justify-evenly items-center flex-col h-28">
              Latest crypto news
            </span>
          </div>
          <div className="">
            <News size={2} />
          </div>
        </div>
      </div>
    </>
  );
}
