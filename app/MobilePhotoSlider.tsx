import { useEffect, useRef, useState } from "react";

interface MobilePhotoSliderProps {
  photoUrls: string[];
}

const MobilePhotoSlider: React.FC<MobilePhotoSliderProps> = ({ photoUrls }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [userScrolling, setUserScrolling] = useState(false);

  const pauseScroll = () => {
    setUserScrolling(true);
  };

  const resumeScroll = () => {
    setUserScrolling(false);
  };

  useEffect(() => {
    const stopAutoScroll = () => {
      setUserScrolling(true);
      setTimeout(() => setUserScrolling(false), 3000);
    };
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("wheel", stopAutoScroll);
    container.addEventListener("touchstart", stopAutoScroll);
    return () => {
      container.removeEventListener("wheel", stopAutoScroll);
      container.removeEventListener("touchstart", stopAutoScroll);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const interval = setInterval(() => {
      if (userScrolling) return;
      container.scrollBy({ left: 2, behavior: "smooth" });
    }, 20);

    return () => clearInterval(interval);
  }, [userScrolling]);
  // const { tablet } = useMediaQuery();
  return (
    <div className={`home-image-container`} ref={containerRef}>
      {photoUrls.map((url, index) => (
        <>
          <img key={index + "image"} src={url} alt="Foto Sternstunde 2025" onMouseEnter={pauseScroll} onMouseLeave={resumeScroll} />
          <div key={index + "spacer"} className="img-spacer"></div>
        </>
      ))}
    </div>
  );
};

export default MobilePhotoSlider;
