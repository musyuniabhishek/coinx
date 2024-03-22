"use client";
import React, { useState } from "react";

export default function Fundamentals({ data }) {
  return (
    <>
      {Object.keys(data).length <= 0 ? (
        ""
      ) : (
        <div className="w-11/12 mx-auto my-3 bg-white rounded-lg p-6 ">
          <h2 className="text-xl font-semibold">Performance</h2>
          <div className="flex items-center justify-between w-full my-5">
            <div className="w-1/6 text-left">
              <p>Today's Low</p>
              <p>
                {data.market_data.low_24h.usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <div className="w-4/6 h-2 bg-gradient-to-r from-red-500 to-green-500 rounded"></div>
            <div className="w-1/6 text-right">
              <p>Today's High</p>
              <p>
                {data.market_data.high_24h.usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
          </div>
          {/* <div className="flex items-center justify-between w-full my-5">
            <div className="w-1/6 text-left">
              <p>52W Low</p>
              <p>38799</p>
            </div>
            <div className="w-4/6 h-2 bg-gradient-to-r from-red-500 to-green-500 rounded"></div>
            <div className="w-1/6 text-right">
              <p>52W High</p>
              <p>785397</p>
            </div>
          </div> */}

          <h2 className="text-xl font-semibold mt-9">Fundamentals</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
            <div>
              <ul className=" mt-6">
                <li className="flex justify-between mb-5">
                  <p>{data.name} Price</p>
                  <p>
                    {data.market_data.current_price.usd.toLocaleString(
                      "en-US",
                      {
                        style: "currency",
                        currency: "USD",
                      }
                    )}
                  </p>
                </li>
                <hr className="mb-5" />
                <li className="flex justify-between mb-5">
                  <p>24h Low / 24h High</p>
                  <p>
                    {data.market_data.low_24h.usd.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                    /
                    {data.market_data.high_24h.usd.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </li>
                <hr className="mb-5" />
                {/* <li className="flex justify-between mb-5">
                  <p>7d Low / 7d High</p>
                  <p>$87348957</p>
                </li>
                <hr className="mb-5" /> */}
                <li className="flex justify-between mb-5">
                  <p>Trading Volume</p>
                  <p>
                    {data.market_data.total_volume.usd.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </li>
                <hr className="mb-5" />
                <li className="flex justify-between mb-5">
                  <p>Market Cap Rank</p>
                  <p>#{data.market_data.market_cap_rank}</p>
                </li>
                <hr className="mb-5" />
              </ul>
            </div>
            <div>
              <ul className=" mt-6">
                <li className="flex justify-between mb-5">
                  <p>Market Cap</p>
                  <p>
                    {data.market_data.market_cap.usd.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </li>
                <hr className="mb-5" />
                {/* <li className="flex justify-between mb-5">
                  <p>Market Cap Dominance</p>
                  <p>$87348957</p>
                </li>
                <hr className="mb-5" /> */}
                <li className="flex justify-between mb-5">
                  <p>Volume / Market Cap</p>
                  <p>
                    {(
                      data.market_data.total_volume.usd /
                      data.market_data.market_cap.usd
                    ).toFixed(4)}
                  </p>
                </li>
                <hr className="mb-5" />
                <li className="flex justify-between mb-5">
                  <p>All-Time High</p>
                  <p>
                    {data.market_data.ath.usd.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                    <span className="ml-4 p-2 bg-red-200">
                      {data.market_data.ath_change_percentage.usd.toFixed(2)}%
                    </span>
                  </p>
                </li>
                <hr className="mb-5" />
                <li className="flex justify-between mb-5">
                  <p>All-Time Low</p>
                  <p>
                    {data.market_data.atl.usd.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                    <span className="ml-4 p-2 bg-green-200">
                      {data.market_data.atl_change_percentage.usd.toFixed(2)}%
                    </span>
                  </p>
                </li>
                <hr className="mb-5" />
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
