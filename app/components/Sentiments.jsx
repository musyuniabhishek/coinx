"use client";
import React from "react";

export default function Sentiments() {
  return (
    <>
      <div className="w-11/12 mx-auto my-3 bg-white rounded p-4 ">
        <h2 className="text-xl font-semibold">Sentiments</h2>
        <p className="text-md font-medium my-5">Key Events</p>
        <div className="flex overflow-x-scroll no-scrollbar gap-10">
          <div className="bg-blue-100 flex gap-5  p-4 rounded-lg ">
            <div className="w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 rounded-full p-2 bg-blue-500 stroke-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
            </div>
            <div className="w-80">
              <p className="my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                quibusdam quaerat eum!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                nobis laborum itaque vitae obcaecati molestias eius repudiandae
                rem eligendi soluta dicta ipsum consequuntur rerum, minima
                magnam debitis facere voluptatum nostrum recusandae consectetur
              </p>
            </div>
          </div>
          <div className="bg-green-100 flex gap-5 p-4 rounded-lg">
            <div className="w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 rounded-full p-2 bg-blue-500 stroke-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
            </div>
            <div className="w-80">
              <p className="my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                quibusdam quaerat eum!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                nobis laborum itaque vitae obcaecati molestias eius repudiandae
                rem eligendi soluta dicta ipsum consequuntur rerum, minima
                magnam debitis facere voluptatum nostrum recusandae consectetur
              </p>
            </div>
          </div>
        </div>
        <p className="text-md font-medium my-5">Analyst Estimates</p>
        <div className="flex justify-evenly">
          <div className="bg-green-100 px-4 py-6 rounded-full w-[10%] self-center text-center">
            <p className="text-green-600">
              {" "}
              <span className="text-2xl font-semibold text-green-600">
                76
              </span>{" "}
              %{" "}
            </p>
          </div>

          <div className="w-[80%] ">
            <div className="flex items-center gap-4 text-center my-3">
              <p className="w-1/6">Buy</p>
              <div className="w-4/6 h-2 bg-green-600 rounded"></div>
              <p className="w-1/6 m-auto">76%</p>
            </div>
            <div className="flex items-center gap-4 text-center my-3">
              <p className="w-1/6">Hold</p>
              <div className="w-1/6 h-2 bg-slate-300 rounded"></div>
              <p className="w-1/6">8%</p>
            </div>
            <div className="flex items-center gap-4 text-center my-3">
              <p className="w-1/6">Sell</p>
              <div className="w-2/6 h-2 bg-red-500 rounded"></div>
              <p className="w-1/6">16%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
