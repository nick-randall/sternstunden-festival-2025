"use client";
import useMediaQuery from "@/components/useMediaQuery";
import { useCallback, useEffect, useRef, useState } from "react";
import NextImage from "next/image";

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
  const { screenWidth } = useMediaQuery();
  const margin = 10;

  const loadImage = useCallback((url: string) => {
    setLoadedSrc(prev => {
      if (prev.includes(url)) {
        console.log("URL " + url.slice(url.length - 7) + " already loaded");
        return prev;
      }

      const img = new Image();
      img.src = url;
      img.onload = () => {
        setLoadedSrc(prev => [...prev, url]);
      };

      return prev;
    });
  }, []);

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

  const uniquePhotoUrls = loadedSrc.filter((src, index, self) => self.indexOf(src) === index);

  const getLeftVals = () => {
    const widths = uniquePhotoUrls.map(url => widthMap[url] + margin);
    const lefts = widths.reduce((acc, curr) => [...acc, acc[acc.length - 1] + curr], [0]);
    return lefts;
  };

  function findCurrImageIdx(scrollPos: number) {
    console.log("finding curr index at scrollpos " + scrollPos);
    const lefts = getLeftVals();
    console.log(lefts);
    let smallestDiff = Infinity;
    let closestIdx = 0;
    for (let i = 0; i < lefts.length; i++) {
      const diff = scrollPos - lefts[i];
      console.log(diff);
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
    console.log("curr scroll pos is " + container.scrollLeft);
    const currImageIdx = findCurrImageIdx(container.scrollLeft);
    console.log("curr image index is " + currImageIdx);

    // now scroll to
    if (currImageIdx < photoUrls.length - 1) {
      const scrollTo = getLeftVals()[currImageIdx + 1];

      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    } else console.log("scroll too high. must be at end of images");
  };

  const tablet = screenWidth > 768 && screenWidth < 1080;

  if (screenWidth < 1080) {
    return (
      <div className={`home-image-container ${tablet ? "tablet" : ""}`}>
        <div className="img-spacer"></div>
        <div className="img-container">
          <NextImage src="/2024_images/ssf24m1.jpg" alt="Demo Foto" layout="fill" objectFit="contain" />
        </div>
        <div className="img-spacer"></div>
        {/* <img src="./2024_images/ssf24m2.jpg" alt="Demo Foto" /> */}
        <div className="img-container">
          <NextImage src="/2024_images/ssf24m2.jpg" alt="Demo Foto" layout="fill" objectFit="cover" />
        </div>
        <div className="img-spacer"></div>
        <img src="./2024_images/ssf24m3.jpg" alt="Demo Foto" />

        <div className="img-spacer"></div>
        <img src="./2024_images/ssf24m4.jpg" alt="Demo Foto" />
      </div>
    );
  }

  return (
    <div className="home-image-container" ref={containerRef}>
      {/* <img onClick={() => changePhotoIndex(-1)} src="./chevron-right.svg" alt="" className="arrow arrow-left" />} */}

      {photoUrls.map((url, index) => {
        const srcIndex = uniquePhotoUrls.length - 1 >= index ? uniquePhotoUrls[index] : undefined;
        console.log("width of element ", widthMap[url]);
        return (
          <img key={index} ref={handleRef} src={srcIndex} alt="Foto Sternstunde 2025" style={{ height: "100%", position: "absolute", left: getLeftOffset(index) }} />
        );
      })}

      <img onClick={scrollForward} src="./chevron-right.svg" alt="" className="arrow arrow-right" />
    </div>
  );
};

export default NewPhotoSlider;
