import React from "react";
import { IcoinCard } from "../utils/interfaces";
import millify from "millify";

export default function CoinCard(props: IcoinCard) {
  let name = props.name;
  if (props.name.length > 17) {
    name = name.slice(0, 17) + "...";
  }
  return (
    <>
      <div className="flex justify-center bg-white flex-col items-center w-52 h-52 border rounded-xl shadow-lg m-2">
        <div className="flex justify-between items-center my-2 flex-col">
          <div className=" mb-2">
            <img className=" w-8 h-8 rounded" src={props.icon} alt="" />
          </div>
          <div className=" text-slate-700 font-semibold text-lg">{name}</div>
        </div>
        <div className="text-slate-500 font-medium text-base flex flex-col justify-evenly items-center">
          <span>Price: $ {props.price}</span>
          <span>Market Cap: $ {millify(props.marketCap)}</span>
          <span>Change: {props.dailyChange} %</span>
        </div>
      </div>
    </>
  );
}
