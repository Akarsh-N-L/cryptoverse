import React from "react";
import { IcurrCardHome } from "../utils/interfaces";

export default function CurrCardHome(props: IcurrCardHome) {
  return (
    <>
      <div className=" flex justify-center flex-col items-center w-52 h-52 border rounded-xl shadow-lg m-4">
        <img className="my-3 w-auto h-16" src={props.image} alt="" />
        <span className=" my-3 text-slate-700 font-medium text-xl">
          {props.stat}
        </span>
        <div className=" my-3 flex justify-center items-center text-blue-600 text-3xl font-extrabold">
          {props.value}
        </div>
      </div>
    </>
  );
}
