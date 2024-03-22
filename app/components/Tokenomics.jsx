import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

export default function Tokenomics() {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    animationEnabled: true,
    title: {
      text: "initial Distribution",
    },
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        // indexLabel: "{name}: {y}",
        // yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Crowdsale inverstors : 80", y: 80 },
          { name: "Foundation : 20", y: 20 },
        ],
      },
    ],
  };
  return (
    <>
      <div className="w-11/12 mx-auto my-3 bg-white rounded-lg p-6 ">
        <h2 className="text-2xl font-semibold mb-5">Tokenmics</h2>
        <CanvasJSChart options={options} />
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est,
          nisi odit pariatur in aspernatur laborum exercitationem deserunt dolor
          fuga rerum ab quam voluptatum veniam vero id consectetur eos natus,
          voluptates, iure ducimus at hic aliquam corporis. Dolorum excepturi
          nam cumque? Explicabo repellendus magni repudiandae totam nam
          voluptate hic quos ad consequuntur neque placeat omnis, atque quam
          voluptatum eius libero. Rerum, culpa deleniti? Exercitationem,
          perspiciatis. Harum hic sunt veritatis autem incidunt illum, aliquam
          aliquid, in odit corrupti,Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eligendi debitis at libero architecto ratione eos
          nisi impedit quidem. Modi impedit optio temporibus voluptatum, quam
          ut.
        </p>
      </div>
    </>
  );
}
