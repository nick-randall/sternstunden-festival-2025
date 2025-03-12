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
  }, [loadImage, photoUrls]);

  const handleRef = useCallback((node: HTMLImageElement | null) => {
    if (node) {
      node.onload = () => {
        if(!node.width) return;
        setWidthMap(prev => ({ ...prev, [node.src]: node.width }));
      };
    }
  }, []);

  const getLeftOffset = (index: number) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += widthMap[loadedSrc[i]] + margin;
    }
    return offset;
  };

  const tablet = screenWidth > 768 && screenWidth < 1080;
  const uniquePhotoUrls = loadedSrc.filter((src, index, self) => self.indexOf(src) === index);
  console.log("unique loadedSrc", uniquePhotoUrls);
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
          <img key={index} ref={handleRef} src={srcIndex} alt="Poo" style={{ height: "100%", position: "absolute", left: getLeftOffset(index) }} />
        );
      })}

      {/* <img onClick={() => scrollForward()} src="./chevron-right.svg" alt="" className="arrow arrow-right" /> */}
    </div>
  );
};

export default NewPhotoSlider;
