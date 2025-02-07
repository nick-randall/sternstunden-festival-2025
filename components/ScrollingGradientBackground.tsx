import { JSX, useCallback, useEffect, useState } from "react";

interface ScrollingGradientBackgroundProps {
  children: JSX.Element;
}

const ScrollingGradientBackground: React.FC<ScrollingGradientBackgroundProps> = ({ children }) => {
  const [ticking, setTicking] = useState(false);

  // let ticking = false;

  const parallaxEffect = useCallback(() => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Queue the update only once per frame
        let scrollPos = window.scrollY;
        const background = document.querySelector(".bg-gradient") as HTMLElement;
        background.style.transform = `translateY(${scrollPos * 0.5}px)`;
        setTicking(false); // Allow new frames to be scheduled
      });
      setTicking(true); // Prevent multiple calls until the frame updates
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", parallaxEffect);
    return () => window.removeEventListener("scroll", parallaxEffect);
  }, []);
  
  return <div className="bg-gradient">{children} </div>;
};

export default ScrollingGradientBackground;
