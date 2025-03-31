"use client";
import useMediaQuery from "@/components/useMediaQuery";
import PlanetsSketch from "../../components/PlanetsSketch";
import "../../styles/common.css";
import p5 from "p5";
import AudioPlayer from "@/components/BigAudioPlayer";
import Link from "next/link";
import { useState } from "react";

const PlanetsPage: React.FC = () => {
  const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/";
  const planets = ["merkur", "venus", "erde", "mars", "jupiter", "saturn", "uranus", "neptun", "pluto"];
  const planetImageMap: { [key: string]: p5.Image | undefined } = {};
  const [currPlanetIndex, setCurrPlanetIndex] = useState(0);

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
    sizeFactor = 0.35;
  }
  return (
    <div className="planets-page-wrapper">
      <AudioPlayer />
      <audio src="https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/hoerspielversion.mp3"></audio>
      <div className="planets-sketch-wrapper" style={{transform:  `translateY(-${20 * sizeFactor}%)` }}>
        <PlanetsSketch
          planets={planets}
          planetImageMap={planetImageMap}
          sizeFactor={sizeFactor}
          rootUrl={rootUrl}
          setCurrPlanetIndex={setCurrPlanetIndex}
        />
        <div className="child">
          <Link
            href={`/planeten/${planets[currPlanetIndex]}`}
            onClick={(ev: React.MouseEvent) => {
              ev.stopPropagation();
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "35%",
              height: "60%",
              // backgroundColor: "green",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanetsPage;
