import { useCallback, useEffect, useState } from "react";

const useMediaQuery = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    document.addEventListener("resize", handleResize);
    handleResize();
  });
  return { screenWidth };
};



export default useMediaQuery