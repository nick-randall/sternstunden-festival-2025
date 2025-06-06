"use client";
import Script from "next/script";
import { FC } from "react";

const Ticketshop: FC = () => {
  const handleLoad = () => {
    const shopFrame = document.getElementById("shop-frame");
    if (shopFrame) {
      shopFrame.style.maxWidth = "100%";
    }
  };
  return (
    <>
      <div className="no-load-tip">
        Falls der Ticketshop nicht lädt, aktualisiere bitte die Seite, in dem du auf F5 oder auf aktualisieren in deinem Browser klickst.
      </div>
      <Script onLoad={handleLoad} src="https://shop.weeztix.com/build/integrate.js"></Script>
      <div id="shop-frame" data-url="https://shop.weeztix.com/eddc7fdc-06c6-11ee-94ba-6a57c78572ab" style={{ maxWidth: 600, margin: "0 auto;" }} />
    </>
  );
};

export default Ticketshop;
