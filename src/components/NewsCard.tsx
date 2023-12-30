import React from "react";
import { InewsCard } from "../utils/interfaces";

export default function NewsCard(props: InewsCard) {
  let heading = props.heading;
  if (props.heading.length > 58) {
    heading = heading.slice(0, 55) + "...";
  }

  let desc = props.desc;
  if (props.desc.length > 90) {
    desc = desc.slice(0, 87) + "...";
  }

  let image = props.image;
  if (!image) {
    image = require("../images/pexels-worldspectrum-844124.jpg");
  }

  return (
    <>
      <div className="flex justify-evenly items-center text-slate-700 flex-col w-96 h-96 shadow-xl rounded-md m-10 hover:text-blue-500">
        <div className=" m-3 mb-0 flex justify-center">
          <img className="w-8/12 h-auto rounded max-h-56" src={image} alt="" />
        </div>
        <div className=" flex justify-evenly items-start p-3 flex-col w-full mb-3 mt-0">
          <div className=" font-semibold text-2xl mb-2">
            <span>{heading}</span>
          </div>
          <div className=" text-slate-500 text-sm font-semibold">
            <span>{desc}</span>
          </div>
        </div>
      </div>
    </>
  );
}
