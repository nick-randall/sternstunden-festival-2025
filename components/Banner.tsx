"use client";
import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const Banner: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleRef = () => {
    setTop();
  };
  const setTop = useCallback(() => {
    const bannerSlot = document.querySelector("#banner-slot");
    if (!bannerSlot) return;
    const { top } = bannerSlot.getBoundingClientRect();
    setTopPosition(top + scrollY);
  }, [setTopPosition]);

  const handleResize = useCallback(() => {
    setTop();
  }, [setTop]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAIzJRyZUQ1RHV0hTSThCSUUwSjI2TFg2WURMU1NRWC4u&origin=lprLink&route=shorturl">
      <div className="banner" ref={handleRef} style={{ top: topPosition }}>
        <div className="banner-text">
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>OPEN CALL ARTISTS: Bewerbt euch jetzt beim Sternstunden Festival 2025&nbsp;</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>OPEN CALL ARTISTS: Bewerbt euch jetzt beim Sternstunden Festival 2025</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
        </div>
      </div>
    </a>,
    document.body
  );
};

export default Banner;
