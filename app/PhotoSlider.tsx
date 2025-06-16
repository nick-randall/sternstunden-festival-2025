"use client";
import useMediaQuery from "@/components/useMediaQuery";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

interface PhotoSliderProps {
  photoComponents: React.JSX.Element[];
}

const scrollStepSize = 100; // pixels to scroll each step

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photoComponents }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pauseScrollingTimer = useRef<NodeJS.Timeout | null>(null);
  const animationFrame = useRef<number | null>(null);
  const scrollPos = useRef(0);
  const lastTimeStamp = useRef(performance.now());
  const { screenWidth } = useMediaQuery();

  const scrollStep = useCallback(() => {
    const deltaTime = (performance.now() - lastTimeStamp.current) / 1000; // in seconds
    lastTimeStamp.current = performance.now();
    const scrollDistance = scrollStepSize * deltaTime; // pixels per second
    scrollPos.current += scrollDistance;
    containerRef.current?.scrollTo({ left: scrollPos.current, behavior: "auto" });
    animationFrame.current = requestAnimationFrame(scrollStep);
  }, []);

  const pauseScroll = () => {
    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  };

  const startScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    scrollPos.current = container.scrollLeft; // reset scroll position
    lastTimeStamp.current = performance.now(); // reset timestamp
    console.log("Starting scroll at position:", scrollPos.current);
    if (animationFrame.current === null) {
      animationFrame.current = requestAnimationFrame(scrollStep);
    }
  }, [scrollStep]);

  const pauseScrollThenResume = useCallback(() => {
    pauseScroll();
    const container = containerRef.current;
    if (!container) return;
    if (screenWidth > 1080) {
      container.style.scrollSnapType = "x mandatory";
    }
    pauseScrollingTimer.current = setTimeout(() => {
      startScroll();
      container.style.scrollSnapType = "none";
    }, 3000);
  }, [screenWidth, startScroll]);

  const scrollBackward = () => {
    const container = containerRef.current;
    if (!container) return;
    pauseScrollThenResume();
    container.scrollBy({ left: -container.clientWidth / 2, behavior: "smooth" });
    setTimeout(() => {
      container.style.scrollSnapType = "none";
    }, 500);
  };

  const scrollForward = () => {
    const container = containerRef.current;
    if (!container) return;
    // container.style.scrollSnapType = "x mandatory";
    pauseScrollThenResume();
    container.scrollBy({ left: container.clientWidth / 2, behavior: "smooth" });
    setTimeout(() => {
      container.style.scrollSnapType = "none";
    }, 500);
  };

  useEffect(() => {
    console.log("Starting photo slider scroll");
    startScroll();
    return () => {
      // Cleanup timers on unmount
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        clearTimeout(pauseScrollingTimer.current!);
      }
    };
  }, [startScroll]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          height: 400,
          width: "calc(100% - 100px)",
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image
            onClick={scrollBackward}
            onMouseEnter={pauseScroll}
            src="./chevron-right.svg"
            alt="Vorwärts Scrollen"
            className="arrow arrow-left"
            height={screenWidth / 3}
            width={screenWidth / 3}
          />
          <Image
            onClick={scrollForward}
            onMouseEnter={pauseScroll}
            src="./chevron-right.svg"
            alt="Rückwärts Scrollen"
            height={screenWidth / 3}
            width={screenWidth / 3}
            className="arrow arrow-right"
          />
        </div>
      </div>
      <div
        ref={containerRef}
        key="photo-slider"
        className="photo-slider"
        onWheel={pauseScrollThenResume}
        onTouchStart={pauseScrollThenResume}
        onTouchEnd={pauseScrollThenResume}
        onTouchMove={pauseScrollThenResume}
        // onTouchCancel={pauseScrollThenResume}
        onMouseLeave={startScroll}
        onMouseEnter={pauseScroll}
      >
        {photoComponents.map(photoComponent => photoComponent)}
      </div>
    </>
  );
};

export default PhotoSlider;
