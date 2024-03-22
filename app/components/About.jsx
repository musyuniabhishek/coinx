"use client";
import React from "react";

export default function About({ data }) {
  return (
    <>
      {Object.keys(data).length <= 0 ? (
        ""
      ) : (
        <div className="w-11/12 mx-auto my-3 bg-white rounded-lg p-6 ">
          <h2 className="text-2xl font-semibold mb-6">About {data.name}</h2>

          <p className="text-lg font-semibold my-4">What Is {data.name} ?</p>
          <p className="line-clamp-6">{data.description.en}</p>

          <hr className="my-5" />

          <h4 className="text-lg font-semibold my-4">
            Lorem ipsum dolor, sit amet
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At atque
            quos numquam quod voluptate? Aperiam deserunt officia consectetur
            minima est, at, dolores accusamus asperiores fugit, assumenda beatae
            sunt numquam? Quasi aliquam maxime voluptas, dolorem distinctio
            repudiandae? Impedit ex quasi molestiae consequatur a aliquam non
            nostrum, iusto veritatis totam, neque ullam inventore odit ad id
            optio rerum! Eum minus ratione expedita, ducimus veritatis iure
            harum reiciendis voluptate laborum dolore culpa enim similique,
            quasi commodi blanditiis. Perferendis unde ipsa sint reprehenderit
            voluptate, quaerat cumque dicta dolor voluptates minima distinctio
            delectus, molestiae alias, ad architecto. Neque veniam reprehenderit
            quia quisquam ratione ab tenetur maxime quis id.
          </p>
        </div>
      )}
    </>
  );
}
