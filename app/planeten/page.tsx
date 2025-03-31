"use client";
import useMediaQuery from "@/components/useMediaQuery";
import PlanetsSketch from "../../components/PlanetsSketch";
import "../../styles/common.css";
import Flex from "@/components/Flex";
import p5 from "p5";

const PlanetsPage: React.FC = () => {
  const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/";
  const planets = ["merkur", "venus", "erde", "mars", "jupiter", "saturn", "uranus", "neptun", "pluto"];
  const planetImageMap: { [key: string]: p5.Image | undefined } = {}
  planets.forEach(planet => {
    planetImageMap[planet] = undefined;
  });
  // const planetUrls = planets.map(planet => `${rootUrl}${planet}.png`);
  const { screenWidth } = useMediaQuery();
  if (screenWidth === 0) {
    return null;
  }
  let sizeFactor = 1;
  if (screenWidth < 1080) {
    sizeFactor = 0.5;
  }
  if (screenWidth < 768) {
    sizeFactor = 0.3;
  }
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <audio src="https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/hoerspielversion.mp3" controls></audio>
      <PlanetsSketch planets={planets} planetImageMap={planetImageMap} sizeFactor={sizeFactor} rootUrl={rootUrl} />
    </Flex>
  );
};

export default PlanetsPage;
