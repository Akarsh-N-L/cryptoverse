import { IcoinListItem } from "../utils/interfaces";
import millify from "millify";

export default function CoinListItem(props: IcoinListItem) {
  const changeStyle =
    Number(props.dailyChange) >= 0 ? " text-green-500" : " text-red-500";
  return (
    <>
      <div className=" bg-blue-50 flex justify-evenly items-center w-full h-16 shadow-none hover:shadow-xl hover:bg-blue-100 hover:border hover:border-blue-200">
        <div className="w-1/12 flex justify-center">
          <img className="w-8 h-8 rounded" src={props.icon} alt="" />
        </div>
        <div className="w-3/12 flex justify-start">
          <span>{props.name}</span>
        </div>
        <div className="w-2/12 flex justify-center">
          <span>$ {props.price}</span>
        </div>
        <div className={`w-2/12 ${changeStyle} flex justify-center`}>
          <span>{props.dailyChange} %</span>
        </div>
        <div className="w-2/12 flex justify-center">
          <span>$ {millify(props.marketCap)}</span>
        </div>
      </div>
    </>
  );
}
