"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MobilePhotoSliderProps {
  photoUrls: string[];
}

const MobilePhotoSlider: React.FC<MobilePhotoSliderProps> = ({ photoUrls }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [userScrolling, setUserScrolling] = useState(false);

  // const pauseScroll = () => {
  //   setUserScrolling(true);
  // };

  // const resumeScroll = () => {
  //   setUserScrolling(false);
  // };

  useEffect(() => {
    const stopAutoScroll = () => {
      setUserScrolling(true);
      setTimeout(() => setUserScrolling(false), 3000);
    };
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("wheel", stopAutoScroll);
    container.addEventListener("touchstart", stopAutoScroll);
    return () => {
      container.removeEventListener("wheel", stopAutoScroll);
      container.removeEventListener("touchstart", stopAutoScroll);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const interval = setInterval(() => {
      if (userScrolling) return;
      container.scrollBy({ left: 2, behavior: "smooth" });
    }, 20);

    return () => clearInterval(interval);
  }, [userScrolling]);

  const scrollForward = () => {
    const container = containerRef.current;
    if (!container) return;
    setUserScrolling(true);
    setTimeout(() => setUserScrolling(false), 3000);
    const currImageIdx = findCurrImageIdx(container.scrollLeft);

    // now scroll to
    if (currImageIdx < photoUrls.length - 1) {
      const scrollTo = getLeftVals()[currImageIdx + 1];

      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    } else console.log("scroll too high. must be at end of images");
  };

  const getLeftVals = () => {
    const container = containerRef.current;
    if (!container) return [];
    const children = Array.from(container.children) as HTMLImageElement[];
    const widths = children.map(child => child.width);
    const lefts = widths.reduce((acc, curr) => [...acc, acc[acc.length - 1] + curr], [0]);
    return lefts;
  };

  function findCurrImageIdx(scrollPos: number) {
    const lefts = getLeftVals();
    let smallestDiff = Infinity;
    let closestIdx = 0;
    for (let i = 0; i < lefts.length; i++) {
      const diff = scrollPos - lefts[i];
      if (diff < smallestDiff && diff >= 0) {
        smallestDiff = diff;
        closestIdx = i;
      }
    }
    return closestIdx;
  }

  useEffect(() => {
    const pauseScroll = () => {
      setUserScrolling(true);
      setTimeout(() => setUserScrolling(false), 3000);
    };
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("wheel", pauseScroll);
    container.addEventListener("touchstart", pauseScroll);
    return () => {
      container.removeEventListener("wheel", pauseScroll);
      container.removeEventListener("touchstart", pauseScroll);
    };
  });
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: 400,
          width: "calc(60% - 53px)",
          left: "calc(40% + 20px)",
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image
            onClick={scrollForward}
            src="./chevron-right.svg"
            alt=""
            className="arrow arrow-right"
            height="50"
            width="50"
            style={{ position: "absolute", height: 50, left: 0, top: 200, transform: "translate(-0%, -50%) rotateY(180deg)", pointerEvents: "auto" }}
          />
          <Image
            onClick={scrollForward}
            src="./chevron-right.svg"
            alt=""
            height="50"
            width="50"
            className="arrow arrow-right"
            style={{ position: "absolute", height: 50, right: 0, top: 200, transform: "translate(-0%, -50%)", pointerEvents: "auto" }}
          />
        </div>
      </div>
      <div ref={containerRef} key="mobile-photo-slider" className="photo-slider">
        {photoUrls.map((url, index) => (
          <>
            <img className="photo" key={index + "image"} src={url} alt="Foto Sternstunde 2025" />
            <div key={index + "spacer"} className="img-spacer"></div>
          </>
        ))}
      </div>
    </>
  );
};

export default MobilePhotoSlider;
