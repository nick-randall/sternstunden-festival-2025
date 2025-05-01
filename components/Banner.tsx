"use client";
import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";

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
    <Link href="../tickets">
      <div className="banner" ref={handleRef} style={{ top: topPosition }}>
        <div className="banner-text">
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
          <div className="star-wrapper">
            <Image src="/star.svg" alt="star symbol" width="20" height="20" />
          </div>
          <span>TICKETS TICKETS TICKETS!</span>
        </div>
      </div>
    </Link>,
    document.body
  );
};

export default Banner;
