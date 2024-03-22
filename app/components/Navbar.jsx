"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  let [show, setShow] = useState(false);

  return (
    <>
      <nav className=" text-white h-16 sticky top-0 bg-[#130749]">
        <div className="lg:px-3 px-0 py-3">
          <div className="flex lg:justify-between lg:mx-4  items-center  lg:flex-row flex-col">
            <h1 className="text-xl lg:me-8  w-11/12 mx-auto lg:w-1/5 mb-4 lg:mb-0">
              <Link href="/">Coin</Link>
              <button
                className="ring-2 ring-white p-1 lg:hidden float-end"
                onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </h1>
            <div
              className={` ${
                !show ? "hidden lg:flex" : "fixed top-16 lg:static"
              } bg-white lg:bg-transparent text-black lg:text-white z-10 w-full p-3 lg:p-0 flex lg:items-baseline lg:w-full lg:justify-end lg:flex-row flex-col `}
            >
              <ul className="flex gap-5 items-center lg:items-baseline lg:flex-row flex-col mb-3 text-center">
                <li>
                  <Link href={"/bitcoin"}>Bitcoin</Link>
                </li>
                <li>
                  <Link href={"/ethereum"}>Ethereum</Link>
                </li>
                <li className=" p-2.5 lg:p-0 w-auto rounded">Crypto Taxes</li>
                <li className=" p-2.5 lg:p-0 w-auto rounded">Free Tools</li>
                <li className=" p-2.5 lg:p-0 w-auto rounded">
                  Resource Center
                </li>
                <li className=" p-2.5 lg:p-0 w-auto rounded">
                  <button className="bg-blue-700 text-white p-2 rounded">
                    Get started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
