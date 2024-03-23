"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CoinList({ btc, eth, tether, bnb }) {
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
        <h1 className="text-5xl font-bold mb-6">
          Market Update{" "}
          <span className="text-xl">
            (Click The Below list to check the live Trading Charts)
          </span>
        </h1>
        <div className="mt-9">
          <div className="my-5 flex overflow-x-scroll justify-between flex-nowrap no-scrollbar p-4 bg-gradiant rounded-lg">
            <div className="min-w-64 text-xl font-semibold">Coin</div>
            <div className="min-w-64 text-xl font-semibold">Price</div>
            <div className="min-w-64 text-xl font-semibold">24h Change</div>
            <div className="min-w-64 text-xl font-semibold">Market Cap</div>
          </div>
          {data ? (
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
            })
          ) : (
            <>
              <div class="w-full justify-center text-4xl my-5 inline-flex items-center px-4 py-2 font-semibold leading-6  shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150">
                <svg
                  class="animate-spin -ml-1 mr-3 h-14 w-14 text-white"
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
                <p>List Loading...</p>
              </div>
              <p className="text-xl">
                Please Click on the Below Coin Icon to Check The Live Trading
                Charts
              </p>
              <div className="my-5">
                <div className="grid grid-cols-12 text-white w-[60%] mx-auto text-center">
                  <div className="col-span-12 sm:col-span-6 md:col-span-3 my-3">
                    <Link href={"/bitcoin"}>
                      <img src={btc.src} alt="" className="w-20 mx-auto" />
                      <p className="text-xl font-semibold mt-5">Bitcoin</p>
                    </Link>
                  </div>
                  <div className="col-span-12 sm:col-span-6 md:col-span-3 my-3">
                    <Link href={"/ethereum"}>
                      <img src={eth.src} alt="" className="w-20 mx-auto" />
                      <p className="text-xl font-semibold mt-5">Ethereum</p>
                    </Link>
                  </div>
                  <div className="col-span-12 sm:col-span-6 md:col-span-3 my-3">
                    <Link href={"/tether"}>
                      <img src={tether.src} alt="" className="w-20 mx-auto" />
                      <p className="text-xl font-semibold mt-5">Tether</p>
                    </Link>
                  </div>
                  <div className="col-span-12 sm:col-span-6 md:col-span-3 my-3">
                    <Link href={"/binancecoin"}>
                      {" "}
                      <img src={bnb.src} alt="" className="w-20 mx-auto" />
                      <p className="text-xl font-semibold mt-5">BNB</p>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
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
