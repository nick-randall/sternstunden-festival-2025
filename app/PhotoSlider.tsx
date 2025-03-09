"use client";
import useMediaQuery from "@/components/useMediaQuery";
import { useRef, useState } from "react";

interface PhotoSliderProps {
  photoUrls: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photoUrls }) => {
  const margin = 10;

  const { screenWidth } = useMediaQuery();
  console.log(screenWidth);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [measured, setMeasured] = useState(false);
  const changePhotoIndex = (change: number) => {
    const newIndex = photoIndex + change;
    setPhotoIndex(newIndex);
    if (photoIndex === photoUrls.length - 1) {
      setPhotoIndex(0);
      setSliderPosition(0);
    } else {
      if (photoIndex < 0) {
        setPhotoIndex(photoUrls.length - 1);
      }
      const newSliderPosition =
        change > 0
          ? sliderPosition + refList.current[photoIndex].getBoundingClientRect().width + margin
          : sliderPosition - refList.current[photoIndex].getBoundingClientRect().width;
      setSliderPosition(newSliderPosition);
    }
  };
  const refList = useRef<HTMLImageElement[]>([]);

  const handleRef = (element: HTMLImageElement | null) => {
    if (element) {
      refList.current.push(element);
    }
    if (refList.current.length === photoUrls.length) {
      console.log("called measureAndMove");
      if (!measured) measureAndMove();
    }
  };

  const measureAndMove = () => {
    let left = margin;
    for (let i = 0; i < refList.current.length; i++) {
      refList.current[i].style.left += left + "px";
      left += refList.current[i].getBoundingClientRect().width + margin;
    }
    setMeasured(true);
  };

  const tablet = screenWidth > 768 && screenWidth < 1080;
  if (screenWidth < 1080) {
    return (
      <div className={`home-image-container ${tablet ? "tablet" : ""}`}>
        <div className="img-spacer"></div>
        <img src="./2024_images/ssf24m1.jpg" alt="Demo Foto" />
        <div className="img-spacer"></div>
        <img src="./2024_images/ssf24m2.jpg" alt="Demo Foto" />
        <div className="img-spacer"></div>
        <img src="./2024_images/ssf24m3.jpg" alt="Demo Foto" />

        <div className="img-spacer"></div>
        <img src="./2024_images/ssf24m4.jpg" alt="Demo Foto" />
      </div>
    );
  }

  return (
    <div className="home-image-container">
      {photoIndex > 0 && <img onClick={() => changePhotoIndex(-1)} src="./chevron-right.svg" alt="" className="arrow arrow-left" />}

      {photoUrls.map((url, index) => (
        <img
          key={index}
          ref={handleRef}
          src={url}
          alt="Demo Foto"
          style={{
            height: "100%",
            transform: `translateX(-${sliderPosition}px)`,
            // animation: "slide 10s",
            position: "absolute",
          }}
        />
      ))}

      {/* </div> */}
      <img onClick={() => changePhotoIndex(1)} src="./chevron-right.svg" alt="" className="arrow arrow-right" />
    </div>
  );
};

export default PhotoSlider;
