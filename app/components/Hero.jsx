"use client";
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("./Chart"), {
  loading: () => <p className="text-red-700 text-6xl">Loading...</p>,
});

export default function Hero({ data }) {
  return (
    <>
      {Object.keys(data).length <= 0 ? (
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
