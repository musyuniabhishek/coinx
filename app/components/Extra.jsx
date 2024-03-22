"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Extra() {
  let [trending, setTrending] = useState();
  let [alsoLike, setAlsoLike] = useState();
  async function getAPIData() {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    response = await response.json();
    setTrending(response.coins.slice(0, 9));
    setAlsoLike(response.coins.slice(9, 17));
  }

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <div className="w-11/12 mx-auto my-3 bg-white rounded-lg p-6 ">
      <h3 className="text-2xl font-semibold my-4">You May Also Like</h3>
      <div className="flex gap-8  overflow-x-scroll no-scrollbar  w-full">
        {alsoLike &&
          alsoLike.map((coin, index) => {
            return (
              <Link href={`/${coin.item.id}`} key={index}>
                <div className="border p-3 h-40 min-w-44 sm:min-w-52">
                  <div className="flex gap-2 items-center">
                    <img
                      src={coin.item.thumb}
                      alt=""
                      className="w-[30px] sm:w-[45px]"
                    />
                    <p className="font-semibold">{coin.item.symbol}</p>
                    <p
                      className={`${
                        coin.item.data.price_change_percentage_24h.usd > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } pt-1 px-2 rounded  font-semibold`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                        2
                      )}
                      %
                    </p>
                  </div>
                  <p className="my-2 font-semibold">{coin.item.data.price}</p>
                  <Image
                    src={coin.item.data.sparkline}
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
            );
          })}
      </div>

      <h3 className="text-2xl font-semibold my-4">Trending Coins</h3>
      <div className="flex gap-8  overflow-x-scroll no-scrollbar  w-full">
        {trending &&
          trending.map((coin, index) => {
            return (
              <Link href={`/${coin.item.id}`} key={index}>
                <div className="border p-3 h-40 min-w-44 sm:min-w-52">
                  <div className="flex gap-2 items-center">
                    <img
                      src={coin.item.thumb}
                      alt=""
                      className="w-[30px] sm:w-[45px]"
                    />
                    <p className="font-semibold">{coin.item.symbol}</p>
                    <p
                      className={`${
                        coin.item.data.price_change_percentage_24h.usd > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } pt-1 px-2 rounded  font-semibold`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                        2
                      )}
                      %
                    </p>
                  </div>
                  <p className="my-2 font-semibold">{coin.item.data.price}</p>
                  <Image
                    src={coin.item.data.sparkline}
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
