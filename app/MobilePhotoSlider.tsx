"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface MobilePhotoSliderProps {
  photoUrls: string[];
}

const MobilePhotoSlider: React.FC<MobilePhotoSliderProps> = ({ photoUrls }) => {
  const [userScrolling, setUserScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  const pauseScroll = () => {
    setUserScrolling(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setUserScrolling(false);
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
    pauseScroll();
    container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
  }

  function scrollForward(): void {
    const container = containerRef.current;
    if (!container) return;
    pauseScroll();
    container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
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
