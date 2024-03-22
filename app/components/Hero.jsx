"use client";
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("./Chart"), {
  loading: () => (
    <div class="w-full justify-center text-xl my-5 inline-flex items-center px-4 py-2 font-semibold leading-6  shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150">
      <svg
        class="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <p> Loading...</p>
    </div>
  ),
});

export default function Hero({ data }) {
  return (
    <>
      {Object.keys(data).length <= 1 ? (
        ""
      ) : (
        <div className="bg-white w-full md:w-11/12 mx-auto m-2 p-3 sm:p-3 rounded-md">
          <div className="flex items-center py-4 my-4 ">
            <img src={data.image.thumb} className="mx-2 w-8 h-8" alt="" />
            <h2 className="mx-2 text-xl font-semibold">{data.name}</h2>
            <p className="mx-2">{data.symbol.toUpperCase()}</p>
            <p className="p-2 mx-2 bg-slate-600 rounded text-white ">
              Rank #{data.market_cap_rank}
            </p>
          </div>
          <div className="flex item-center gap-6 mx-4">
            <p className="text-2xl font-semibold">
              {data.market_data.current_price.usd.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p
              className={`${
                data.market_data.market_cap_change_percentage_24h > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              } pt-1 px-2 rounded  font-semibold`}
            >
              {data.market_data.market_cap_change_percentage_24h.toFixed(2)}%
            </p>
            <p>(24h)</p>
          </div>
          <div className="mx-4 my-2">
            <p>
              {data.market_data.current_price.inr.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </p>
          </div>

          <div className="h-96  ">
            <Chart data={data} />
          </div>
        </div>
      )}
    </>
  );
}
