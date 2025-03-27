"use client";
import useMediaQuery from "@/components/useMediaQuery";
import PlanetsSketch from "../../components/PlanetsSketch";
import "../../styles/common.css";

const PlanetsPage: React.FC = () => {
  const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/";
  const planets = ["merkur", "venus", "erde", "mars", "jupiter", "saturn", "uranus", "neptun", "pluto"];
  const planetUrls = planets.map(planet => `${rootUrl}${planet}.png`);
  const { screenWidth } = useMediaQuery();
  if(screenWidth === 0) {
    return null;
  }
  let sizeFactor = 1;
  if (screenWidth < 1080) {
    sizeFactor = 0.5;
  }
  if (screenWidth < 768) {
    sizeFactor = 0.3;
  }
  console.log("screen width", screenWidth);
  console.log("size factor", sizeFactor);
  return <PlanetsSketch planetUrls={planetUrls} sizeFactor={sizeFactor} />;
};

export default PlanetsPage;
