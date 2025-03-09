'use client';

import { useCallback, useEffect, useState } from "react";

const useMediaQuery = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const handleResize = useCallback(() => {
    console.log("resize");
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [handleResize]);
  return { screenWidth };
};



export default useMediaQuery