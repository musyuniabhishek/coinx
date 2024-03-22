"use client";
import React, { useEffect, useState } from "react";
import img from "../images/login.png";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  let [data, setData] = useState();
  async function getAPIData() {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    response = await response.json();
    setData(response.coins.slice(0, 3));
  }

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <>
      <div className="container w-11/12 mx-auto my-2 py-3 px-6 rounded-xl bg-blue-700 text-white text-center">
        <h2 className="text-2xl font-semibold">
          Get Started with Koinx <br /> for Free
        </h2>
        <p className="my-5">
          with our range of features that you can equip for free, Koinx allows
          you to be more educated and aware of tax reports.
        </p>
        <Image
          className="h-72 mx-auto w-80"
          src={img}
          priority={false}
          alt="png"
        />
        <button className="bg-white text-black my-6 p-3 font-semibold rounded-lg">
          Get Started for Free
        </button>
      </div>
      <div className="container w-11/12 mx-auto my-5 p-4  rounded-xl  bg-white">
        <h2 className="text-xl font-semibold">Trending Coins (24h)</h2>

        {data &&
          data.map((item, index) => {
            return (
              <Link href={`/${item.item.id}`} key={index}>
                <div className="flex w-11/12 mx-auto justify-between mt-5 items-center">
                  <div className="flex gap-2 items-center">
                    <img src={item.item.thumb} alt="" className="w-[45px]" />
                    <p className="font-semibold">
                      {item.item.name} ({item.item.symbol})
                    </p>
                  </div>
                  <div>
                    <p
                      className={`${
                        item.item.data.price_change_percentage_24h.usd > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } pt-1 px-2 rounded  font-semibold`}
                    >
                      {item.item.data.price_change_percentage_24h.usd.toFixed(
                        2
                      )}{" "}
                      %
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}
