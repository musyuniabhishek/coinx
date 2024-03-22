"use client";
import React from "react";
import Team1 from "../images/Team1.jpg";
import Image from "next/image";

export default function Team() {
  return (
    <div className="w-11/12 mx-auto my-3 bg-white rounded-lg p-6 ">
      <h2 className="text-2xl font-semibold my-3">Team</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit totam
        sit sunt veritatis temporibus? Expedita laboriosam, qui dolorem possimus
        rem tenetur ratione pariatur.
      </p>
      <div className="flex md:flex-row flex-col items-center gap-4 my-4 bg-blue-100 rounded-lg p-4">
        <div className="w-full md:w-1/6 text-center">
          <Image src={Team1} height={100} className="rounded-lg mx-auto" />
          <p className="font-semibold mt-3">John Smith</p>
          <p>Designation here</p>
        </div>
        <p className="w-full md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          commodi consectetur obcaecati explicabo porro? Ad possimus earum
          temporibus error nobis a nemo sit laborum nam Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Fugiat perspiciatis dolorem est
          expedita placeat reiciendis Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nostrum, praesentium.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-4 my-4 bg-blue-100 rounded-lg p-4">
        <div className="w-full md:w-1/6 text-center">
          <Image src={Team1} height={100} className="rounded-lg mx-auto" />
          <p className="font-semibold mt-3">John Smith</p>
          <p>Designation here</p>
        </div>
        <p className="w-full md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          commodi consectetur obcaecati explicabo porro? Ad possimus earum
          temporibus error nobis a nemo sit laborum nam Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Fugiat perspiciatis dolorem est
          expedita placeat reiciendis Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nostrum, praesentium.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-4 my-4 bg-blue-100 rounded-lg p-4">
        <div className="w-full md:w-1/6 text-center">
          <Image src={Team1} height={100} className="rounded-lg mx-auto" />
          <p className="font-semibold mt-3">John Smith</p>
          <p>Designation here</p>
        </div>
        <p className="w-full md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          commodi consectetur obcaecati explicabo porro? Ad possimus earum
          temporibus error nobis a nemo sit laborum nam Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Fugiat perspiciatis dolorem est
          expedita placeat reiciendis Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nostrum, praesentium.
        </p>
      </div>
    </div>
  );
}
