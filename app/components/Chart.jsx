"use client";
import React, { useEffect, useRef, useState } from "react";

function Chart({ data }) {
  const container = useRef();
  const [initialized, setInitialized] = useState(false);
  const coin = data.symbol.toUpperCase();
  function setData() {
    try {
      if (!initialized) {
        const script = document.createElement("script");
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
            {
              "autosize": true,
              "symbol": "${coin}USDT",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "light",
              "style": "3",
              "locale": "en",
              "enable_publishing": false,
              "backgroundColor": "rgba(238, 238, 238, 1)",
              "gridColor": "rgba(207, 226, 243, 0)",
              "hide_legend": true,
              "withdateranges": true,
              "hide_top_toolbar": true,
              "save_image": false,
              "calendar": false,
              "hide_volume": true,
              "support_host": "https://www.tradingview.com"
            }`;

        if (container.current.childElementCount <= 1) {
          container.current.appendChild(script);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  <iframe
    style="aspect-ratio: 1200 / 630; width:100%; height:fit-content;"
    src="https://www.coindesk.com/embedded-chart/fDF6zHGFtRDQC"
    width="100%"
    frameborder="0"
  ></iframe>;

  useEffect(() => {
    if (!initialized) {
      setData();
    }
    setInitialized(true);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget "></div>
    </div>
  );
}

export default Chart;
