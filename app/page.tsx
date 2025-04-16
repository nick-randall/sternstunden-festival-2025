import React from "react";
import "../styles/home.css";
import "../styles/common.css";
import Spacer from "../components/Spacer";
import PhotoSlider from "./PhotoSlider";
import Banner from "@/components/Banner";
import Image from "next/image";

const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/";
const initial = ["ssf24m43", "ssf24m115", "ssf24m112", "ssf24m113", "ssf24m44", "ssf24m108"];

export default function Page() {
  const photoUrls = [];
  for (let i = 0; i < initial.length; i++) {
    photoUrls.push(`${rootUrl}${initial[i]}.jpg`);
  }

  for (let i = 1; i < 115; i++) {
    if (i === 80) continue;
    photoUrls.push(`https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m${i}.jpg`);
  }
  for (let i = 1; i < 87; i++) {
    if (i === 66) continue;
    photoUrls.push(`https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24${i}.jpg`);
  }
  return (
    <>
      <Image className="header-logo" src="/logo-with-dates.png" alt="Sternstunden Festival Logo" width="827" height="434" />
      <div id="banner-slot" />
      <Banner />
      <Spacer height={64} />

      <div className="content-box">
        <div className="text-box">
          <div>
            Das Sternstunden Festival vereint inspirierende Konzerterlebnisse in besonderer Umgebung mit spannenden astrophysikalischen Einblicken
            unter Hamburgs Sternenhimmel in einzigartiger Festivalatmosphäre.
            <br />
            <br />
            Das Festival ist eine Initiative der Unimusik der Universität Hamburg in Zusammenarbeit mit der Hamburger Sternwarte in Bergedorf, die zum
            Fachbereich Physik gehört.
          </div>
          <br />
          <a className="more-info" href="/info">
            MEHR INFOS
          </a>
        </div>
        <div className="responsive-spacer-15"></div>

        <PhotoSlider photoUrls={photoUrls} />
      </div>
      <Spacer height={32} />
      <div className="content-box video-container">
        <div>AFTERMOVIE 2024</div>
        <iframe
          className="video"
          frameBorder="0"
          src="https://www.youtube.com/embed/H_ZANaTi9Lo?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.sternstundenfestival.de&playsinline=1&enablejsapi=1&widgetid=1"
        ></iframe>
      </div>
    </>
  );
}
