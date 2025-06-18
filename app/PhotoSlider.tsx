"use client";
import useMediaQuery from "@/components/useMediaQuery";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

interface PhotoSliderProps {
  // photoComponents: React.JSX.Element[];
  imagesWithPlaceholders: ImageWithPlaceholder[];
}

const scrollStepSize = 100; // pixels to scroll each step

const PhotoSlider: React.FC<PhotoSliderProps> = ({ imagesWithPlaceholders }) => {
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
      <div style={{ position: "relative" }}>
        <Image
          onClick={scrollBackward}
          onMouseEnter={pauseScroll}
          src="./chevron-right.svg"
          alt="Vorwärts Scrollen"
          className="arrow arrow-left"
          height="50"
          width="50"
        />
        <Image
          onClick={scrollForward}
          onMouseEnter={pauseScroll}
          src="./chevron-right.svg"
          alt="Rückwärts Scrollen"
          height="50"
          width="50"
          className="arrow arrow-right"
        />
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
        {imagesWithPlaceholders.map((img, i) => (
          <Image
            key={`photo-${i}`}
            height={300}
            width={300}
            src={img.src}
            placeholder="blur"
            blurDataURL={img.placeholder}
            alt="Rückblick Foto Sternstunden Festival 2024"
            priority={i < 10}
            loading={i < 10 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </>
  );
};

export default PhotoSlider;
