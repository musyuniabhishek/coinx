"use client";

import SideBar from "../components/SideBar";
import Fundamentals from "../components/Fundamentals";
import Sentiments from "../components/Sentiments";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import Extra from "../components/Extra";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero"), {
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

export default function page({ params }) {
  const coin = params.coin;
  const [data, setData] = useState({});
  const [nav, setNav] = useState("overview");
  async function getAPIData() {
    try {
      let response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin}?tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      response = await response.json();

      setData(response);
    } catch (error) {
      console.log("Something Went Wrong", error);
    }
  }
  useEffect(() => {
    getAPIData();
  }, [params]);
  return (
    <>
      <div className=" grid grid-cols-12">
        {Object.keys(data).length > 1 ? (
          <div className=" col-span-12 lg:col-span-8">
            <Hero data={data} />

            <div className="w-11/12 mx-auto mb-3 mt-8 ">
              <ul className="flex justify-around gap-8  overflow-x-scroll no-scrollbar text-white ">
                <li
                  className={`${
                    nav === "overview"
                      ? "text-blue-600 underline font-bold"
                      : ""
                  } cursor-pointer`}
                  onClick={() => setNav("overview")}
                >
                  Overview
                </li>
                <li
                  className={`${
                    nav === "fundamentals"
                      ? "text-blue-600 underline font-bold"
                      : ""
                  } cursor-pointer`}
                  onClick={() => setNav("fundamentals")}
                >
                  Fundamentals
                </li>
                <li
                  className={`${
                    nav === "news-insights"
                      ? "text-blue-600 underline font-bold"
                      : ""
                  } cursor-pointer`}
                  onClick={() => setNav("news-insights")}
                >
                  News insights
                </li>
                <li
                  className={`${
                    nav === "sentiments"
                      ? "text-blue-600 underline font-bold"
                      : ""
                  } cursor-pointer`}
                  onClick={() => setNav("sentiments")}
                >
                  Sentiments
                </li>
                <li
                  className={`${
                    nav === "team" ? "text-blue-600 underline font-bold" : ""
                  } cursor-pointer`}
                  onClick={() => setNav("team")}
                >
                  Team
                </li>
                <li
                  className={`${
                    nav === "tokenomics"
                      ? "text-blue-600 underline font-bold"
                      : ""
                  } cursor-pointer`}
                  onClick={() => setNav("tokenomics")}
                >
                  Tokenomics
                </li>
              </ul>
              <hr className="mt-4  " />
            </div>
            {nav === "fundamentals" || nav === "overview" ? (
              <Fundamentals data={data} />
            ) : (
              ""
            )}
            {nav === "sentiments" && <Sentiments />}
            {nav === "news-insights" && <About data={data} />}
            {nav === "tokenomics" && <Tokenomics />}
            {nav === "team" || nav === "overview" ? <Team /> : ""}
            <Extra />
          </div>
        ) : (
          <div className=" col-span-12 lg:col-span-8">
            <div class="w-full h-52 justify-center text-2xl my-5 inline-flex items-center px-4 py-2 font-semibold leading-6  shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150">
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
              {/* <p>Coin Chart Loading...</p> */}
              <p>Api Not Working.. Please Wait/refresh after Some time</p>
            </div>
          </div>
        )}

        <div className="col-span-12 lg:col-span-4">
          <SideBar />
        </div>
      </div>
    </>
  );
}
