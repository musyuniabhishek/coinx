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
  loading: () => <p>Loading...</p>,
});

export default function page({ params }) {
  const coin = params.coin;
  const [data, setData] = useState({});
  const [nav, setNav] = useState("overview");
  async function getAPIData() {
    let response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}?tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=false`
    );
    response = await response.json();

    setData(response);
  }

  useEffect(() => {
    getAPIData();
  }, [params]);
  return (
    <>
      <div className=" grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-8">
          <Hero data={data} />

          <div className="w-11/12 mx-auto mb-3 mt-8 ">
            <ul className="flex justify-around gap-8  overflow-x-scroll no-scrollbar text-white ">
              <li
                className={`${
                  nav === "overview" ? "text-blue-600 underline font-bold" : ""
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

        <div className="col-span-12 lg:col-span-4">
          <SideBar />
        </div>
      </div>
    </>
  );
}
