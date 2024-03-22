"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CoinList() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  async function getAPIData() {
    try {
      var response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h&locale=en`
      );
      response = await response.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAPIData();
  }, [page]);
  return (
    <>
      <div className="text-white w-[85%] mx-auto mt-28">
        <h1 className="text-5xl font-bold mb-6">Market Update</h1>
        <div className="mt-9">
          <div className="my-5 flex overflow-x-scroll justify-between flex-nowrap no-scrollbar p-4 bg-gradiant rounded-lg">
            <div className="min-w-64 text-xl font-semibold">Coin</div>
            <div className="min-w-64 text-xl font-semibold">Price</div>
            <div className="min-w-64 text-xl font-semibold">24h Change</div>
            <div className="min-w-64 text-xl font-semibold">Market Cap</div>
          </div>
          {data &&
            data.map((coin, index) => {
              return (
                <>
                  <Link href={`/${coin.id}`} key={coin.id}>
                    <div className="my-5 flex overflow-x-scroll justify-between flex-nowrap no-scrollbar p-4 rounded-lg items-center">
                      <div className="min-w-64 text-xl font-semibold flex items-center gap-5">
                        <img src={coin.image} alt="" className="w-14" />
                        <p>{coin.name}</p>
                      </div>
                      <div className="min-w-64 text-xl font-semibold">
                        {coin.current_price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </div>
                      <div className="min-w-64 text-xl font-semibold">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </div>
                      <div className="min-w-64 text-xl font-semibold">
                        {coin.market_cap.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </div>
                    </div>
                  </Link>
                  <hr className="mb-2" />
                </>
              );
            })}
          <div className="flex justify-center gap-2 md:gap-10 my-10">
            <div
              className={`${
                page === 1 ? "bg-gradiant text-white" : "bg-white  text-black"
              } px-5 py-3  text-xl font-semibold rounded-full cursor-pointer`}
              onClick={() => setPage(1)}
            >
              1
            </div>
            <div
              className={`${
                page === 2 ? "bg-gradiant text-white" : "bg-white  text-black"
              } px-5 py-3  text-xl font-semibold rounded-full cursor-pointer`}
              onClick={() => setPage(2)}
            >
              2
            </div>
            <div
              className={`${
                page === 3 ? "bg-gradiant text-white" : "bg-white  text-black"
              } px-5 py-3  text-xl font-semibold rounded-full cursor-pointer`}
              onClick={() => setPage(3)}
            >
              3
            </div>
            <div
              className={`${
                page === 4 ? "bg-gradiant text-white" : "bg-white  text-black"
              } px-5 py-3  text-xl font-semibold rounded-full cursor-pointer`}
              onClick={() => setPage(4)}
            >
              4
            </div>
            <div
              className={`${
                page === 5 ? "bg-gradiant text-white" : "bg-white  text-black"
              } px-5 py-3  text-xl font-semibold rounded-full cursor-pointer`}
              onClick={() => setPage(5)}
            >
              5
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
