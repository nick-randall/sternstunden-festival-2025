"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import MobilePhotoSlider from "./MobilePhotoSlider";
// import NextImage from "next/image";

interface NewPhotoSliderProps {
  photoUrls: string[];
}

interface WidthMap {
  [url: string]: number;
}

const NewPhotoSlider: React.FC<NewPhotoSliderProps> = ({ photoUrls }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedSrc, setLoadedSrc] = useState<string[]>([]);
  const [widthMap, setWidthMap] = useState<WidthMap>({});
  const [mobilePhotoUrls, setMobilePhotoUrls] = useState<string[]>([]);

  const margin = 10;

  const loadImage = useCallback(
    (url: string) => {
      if (loadedSrc.includes(url)) {
        return;
      }

      const img = new Image();
      img.src = url;
      img.onload = () => {
        setLoadedSrc(prev => {
          const uniquePhotoUrls = prev.filter((src, index, self) => self.indexOf(src) === index);
          return [...uniquePhotoUrls, url];
        });
      };
    },
    [loadedSrc]
  );

  useEffect(() => {
    loadImage(photoUrls[0]);
    loadImage(photoUrls[1]);
    loadImage(photoUrls[2]);
    loadImage(photoUrls[3]);
    loadImage(photoUrls[4]);
  }, [loadImage, photoUrls]);

  const handleRef = useCallback((node: HTMLImageElement | null) => {
    if (node) {
      node.onload = () => {
        if (!node.width) return;
        setWidthMap(prev => ({ ...prev, [node.src]: node.width }));
      };
    }
  }, []);

  const getLeftOffset = (index: number) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += widthMap[loadedSrc[i]] + margin;
    }
    return offset || 0;
  };

  const getLeftVals = () => {
    const widths = loadedSrc.map(url => widthMap[url] + margin);
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

  const scrollForward = () => {
    const container = containerRef.current;
    if (!container) return;
    const currImageIdx = findCurrImageIdx(container.scrollLeft);

    // now scroll to
    if (currImageIdx < photoUrls.length - 1) {
      const scrollTo = getLeftVals()[currImageIdx + 1];

      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    } else console.log("scroll too high. must be at end of images");
  };

  // const scrollBackward = () => {
  //   const container = containerRef.current;
  //   if (!container) return;
  //   const currImageIdx = findCurrImageIdx(container.scrollLeft);
  //   if (currImageIdx < photoUrls.length - 1) {
  //     const scrollTo = getLeftVals()[currImageIdx - 1];

  //     container.scrollTo({ left: scrollTo, behavior: "smooth" });
  //   } else console.log("scroll too high. must be at end of images");
  // };

  // const moveLeftArrowToFixedPos = (node: HTMLImageElement | null) => {
  //   const leftArrow = node;
  //   if (!leftArrow) return;
  //   if (leftArrow) {
  //     const container = containerRef.current;
  //     if (!container) return;
  //     const { height, left } = container.getBoundingClientRect();
  //     const { height: arrowHeight } = leftArrow.getBoundingClientRect();
  //     // leftArrow.style.transform = `rotateY(180deg) translateY(${height / 2 - arrowHeight / 2}px)`;
  //     leftArrow.style.transform = `rotateY(180deg) translateY(${height / 2 - arrowHeight / 2}px)`;
  //     leftArrow.style.left = `${left}px`;
  //   }
  // };

  const moveRightArrowToFixedPos = (node: HTMLImageElement | null) => {
    const rightArrow = node;
    if (!rightArrow) return;
    if (rightArrow) {
      const container = containerRef.current;
      if (!container) return;
      const { height } = container.getBoundingClientRect();
      const { height: arrowHeight } = rightArrow.getBoundingClientRect();
      rightArrow.style.transform = `translateY(${height / 2 - arrowHeight / 2}px) translateX(-50%)`;
    }
  };

  const listenForScroll = useCallback(
    (scrollPos: number) => {
      const leftmostLoaded = Object.values(widthMap).reduce((acc, curr) => acc + curr + margin, 0);
      if (scrollPos > leftmostLoaded - 500 && loadedSrc.length < photoUrls.length) {
        for (let i = loadedSrc.length; i < loadedSrc.length + 3; i++) {
          loadImage(photoUrls[i]);
        }
      }
      if (scrollPos > 200) {
        const leftArrow = document.querySelector(".arrow-left");
        leftArrow?.classList.remove("arrow-visible");
      }
    },
    [loadImage, photoUrls, loadedSrc.length, widthMap]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", () => {
      listenForScroll(container.scrollLeft);
    });
  }, [listenForScroll]);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1080) {
        setMobilePhotoUrls(photoUrls);
      }
    };



    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [photoUrls]);
  

  if (mobilePhotoUrls.length > 0) {
    return <MobilePhotoSlider photoUrls={mobilePhotoUrls} />;
  }
  return (
    <div className="home-image-container" ref={containerRef}>
      {/* <img ref={moveLeftArrowToFixedPos} onClick={scrollBackward} src="./chevron-right.svg" alt="" className="arrow arrow-left" /> */}

      {photoUrls.map((url, index) => {
        const src = loadedSrc.length - 1 >= index ? loadedSrc[index] : undefined;
        return (
          <img
            key={index}
            ref={handleRef}
            src={src}
            alt="Foto Sternstunde 2025"
            style={{ height: "100%", position: "absolute", left: getLeftOffset(index) }}
          />
        );
      })}

      <img ref={moveRightArrowToFixedPos} onClick={scrollForward} src="./chevron-right.svg" alt="" className="arrow arrow-right" />
    </div>
  );
};

export default NewPhotoSlider;
