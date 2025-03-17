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
    console.log("handle ref called");
    if (node) {
      node.onload = () => {
        if (!node.width) return;
        console.log("onload");
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
    // console.log(lefts);
    let smallestDiff = Infinity;
    let closestIdx = 0;
    for (let i = 0; i < lefts.length; i++) {
      const diff = scrollPos - lefts[i];
      // console.log(diff);
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

  // const tablet = screenWidth > 768 && screenWidth < 1080;

  const listenForScroll = useCallback(
    (scrollPos: number) => {
      const leftmostLoaded = Math.max(...Object.values(widthMap));
      if (scrollPos > leftmostLoaded - 500 && uniquePhotoUrls.length < photoUrls.length) {
        console.log("unique photo urls length " + uniquePhotoUrls.length);
        console.log("photo urls length " + photoUrls.length);
        for (let i = uniquePhotoUrls.length; i < uniquePhotoUrls.length + 3; i++) {
          loadImage(photoUrls[i]);
        }
      }
    },
    [loadImage, photoUrls, uniquePhotoUrls.length, widthMap]
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

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [photoUrls]);

  let pics = containerRef.current?.children.length;
  const lefts: number[] = [];
  if (!pics) {
    console.log("oops");
    pics = 10;
  }
  for (let i = 0; i < pics; i++) {
    const child = containerRef.current?.children[i];
    if (child && child.tagName === "IMG") {
      const { width } = child.getBoundingClientRect();

      lefts.push(width + margin + (lefts[i - 1] || 0));
    }
  }
  if (mobilePhotoUrls.length > 0) {
    return <MobilePhotoSlider photoUrls={mobilePhotoUrls} />;
  }
  return (
    <div className="home-image-container" ref={containerRef}>
      {/* <img onClick={() => changePhotoIndex(-1)} src="./chevron-right.svg" alt="" className="arrow arrow-left" />} */}
      <button
        onClick={() => {
          console.log("width map ", widthMap);
          console.log(getLeftVals());
        }}
        style={{ backgroundColor: "green", height: 300, position: "absolute", zIndex: 99 }}
      >
        SHOW WIDTH MAP
      </button>

      {photoUrls.map((url, index) => {
        const src = uniquePhotoUrls.length - 1 >= index ? uniquePhotoUrls[index] : undefined;
        console.log(uniquePhotoUrls.length);
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
