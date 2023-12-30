import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

export default function Hello() {
  return (
    <div className=" w-full border-b border-slate-200 flex justify-center items-center py-3 flex-wrap">
      <div className="flex justify-between items-center max-w-5xl w-full flex-wrap">
        <div className=" text-2xl text-blue-600 font-semibold w-3/12 mx-3">
          <Link to="/">Cryptoverse</Link>
        </div>
        <div className="flex justify-between items-center w-5/12 max-w-96 flex-wrap">
          <NavLink
            to="/"
            className={(isActive) =>
              `font-medium ${isActive ? "text-blue-500" : "text-slate-500"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cryptocurrencies"
            className={(isActive) =>
              `font-medium ${isActive ? "text-blue-500" : "text-slate-500"}`
            }
          >
            Cryptocurrencies
          </NavLink>
          <NavLink
            to="/exchanges"
            className={(isActive) =>
              `font-medium ${isActive ? "text-blue-500" : "text-slate-500"}`
            }
          >
            Exchanges
          </NavLink>
          <NavLink
            to="/news"
            className={(isActive) =>
              `font-medium ${isActive ? "text-blue-500" : "text-slate-500"}`
            }
          >
            News
          </NavLink>
        </div>
        <div className=" w-3/12 flex justify-end items-center">
          <div className=" text-3xl p-0 m-0 text-slate-600">
            <i className="ri-account-circle-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
