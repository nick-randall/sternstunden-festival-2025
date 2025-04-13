"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface PhotoSliderProps {
  photoUrls: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photoUrls }) => {
  const [userScrolling, setUserScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    const scroll = () => {
      const container = containerRef.current;
      if (!container) return;
      autoScrollTimer.current = setTimeout(() => {
        if (userScrolling) return;
        container.scrollBy({ left: 20, behavior: "smooth" });
        scroll();
      }, 150);
    };
    scroll();
    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    };
  }, [userScrolling]);

  const scrollBackward = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.scrollSnapType = "x mandatory";
    pauseScroll();
    container.scrollBy({ left: -container.clientWidth / 2, behavior: "smooth" });
    setTimeout(() => {
      container.style.scrollSnapType = "none";
    }, 500);
  };

  const scrollForward = () => {
    const container = containerRef.current;
    if (!container) return;
    container.style.scrollSnapType = "x mandatory";
    pauseScroll();
    container.scrollBy({ left: container.clientWidth / 2, behavior: "smooth" });
    setTimeout(() => {
      container.style.scrollSnapType = "none";
    }, 500);
  };

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    let left = 0;
    for (let i = 0; i < container.children.length; i++) {
      const child = container.children[i];
      left += child.clientWidth;
      if (left > scrollLeft) {
        setCurrentImageIndex(i);
        break;
      }
    }
  }, [setCurrentImageIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const getLoadingType = (index: number) => {
    if (index === 0) return undefined;
    if (currentImageIndex + 2 > index) return "eager";
    return "lazy";
  };

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
          <Image onClick={scrollBackward} src="./chevron-right.svg" alt="Scroll Back" className="arrow arrow-left" height="50" width="50" />
          <Image onClick={scrollForward} src="./chevron-right.svg" alt="Scroll Forward" height="50" width="50" className="arrow" />
        </div>
      </div>
      <div ref={containerRef} key="mobile-photo-slider" className="photo-slider" onWheel={pauseScroll} onTouchStart={pauseScroll}>
        {photoUrls.map((url, index) => (
          <Image
            height="400"
            width="400"
            key={index + "image"}
            src={url}
            alt="Rückblick Foto Sternstunden Festival 2024"
            priority={index === 0}
            loading={getLoadingType(index)}
          />
        ))}
      </div>
    </>
  );
};

export default PhotoSlider;
