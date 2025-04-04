"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PhotoSliderProps {
  photoUrls: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photoUrls }) => {
  const [userScrolling, setUserScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  const pauseScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    // container.style.scrollSnapType = "x mandatory";
    setUserScrolling(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setUserScrolling(false);
      // container.style.scrollSnapType = "none";
    }, 3000);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    autoScrollTimer.current = setInterval(() => {
      if (userScrolling) return;
      container.scrollBy({ left: 10, behavior: "smooth" });
    }, 50);

    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, [userScrolling]);

  function scrollBackward(): void {
    const container = containerRef.current;
    if (!container) return;
    container.style.scrollSnapType = "x mandatory";
    pauseScroll();
    container.scrollBy({ left: -container.clientWidth / 2, behavior: "smooth" });
    setTimeout(() => {
      container.style.scrollSnapType = "none";
    }, 500);
  }

  function scrollForward(): void {
    const container = containerRef.current;
    if (!container) return;
    container.style.scrollSnapType = "x mandatory";
    pauseScroll();
    container.scrollBy({ left: container.clientWidth / 2, behavior: "smooth" });
    setTimeout(() => {
      container.style.scrollSnapType = "none";
    }, 500);
  }

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
          <Image onClick={scrollBackward} src="./chevron-right.svg" alt="" className="arrow arrow-left" height="50" width="50" />
          <Image onClick={scrollForward} src="./chevron-right.svg" alt="" height="50" width="50" className="arrow" />
        </div>
      </div>
      <div ref={containerRef} key="mobile-photo-slider" className="photo-slider" onWheel={pauseScroll} onTouchStart={pauseScroll}>
        {photoUrls.map((url, index) => (
          <Image height="400" width="400" key={index + "image"} src={url} alt="Foto Sternstunde 2025" priority={index < 4} />
        ))}
      </div>
    </>
  );
};

export default PhotoSlider;
