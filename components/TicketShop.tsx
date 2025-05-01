"use client";
import { FC, useEffect } from "react";

const Ticketshop: FC = () => {
  useEffect(() => {
    const handleLoad = () => {
      const shopFrame = document.getElementById("shop-frame");
      if (shopFrame) {
        shopFrame.style.maxWidth = "100%";
      }
    };

    const script = document.createElement("script");
    script.src = "https://shop.weeztix.com/build/integrate.js";
    script.onload = handleLoad;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className="no-load-tip">
        Falls der Ticketshop nicht lädt, aktualisiere bitte die Seite, in dem du auf F5 oder auf aktualisieren in deinem Browser klickst.
      </div>

      <div
        id="shop-frame"
        data-url="https://shop.weeztix.com/eddc7fdc-06c6-11ee-94ba-6a57c78572ab"
        style={{ maxWidth: 600, margin: "0 auto;" }}
      ></div>
    </>
  );
};

export default Ticketshop;
