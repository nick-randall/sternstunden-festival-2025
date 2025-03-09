import React from "react";
import "../styles/home.css";
import "../styles/common.css";
import Spacer from "../components/Spacer";
import PhotoSlider from "./PhotoSlider";

export default function Page() {
  return (
    <>
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
          <a className="more-info" href="#">
            MEHR INFOS
          </a>
        </div>
        <div className="responsive-spacer-15"></div>
        <PhotoSlider
          photoUrls={["./2024_images/ssf24m1.jpg", "./2024_images/ssf24m2.jpg", "./2024_images/ssf24m3.jpg", "./2024_images/ssf24m4.jpg"]}
        />
        {/* <div className="home-image-container">
          <div className="img-spacer"></div>
          <img src="./2024_images/ssf24m1.jpg" alt="Demo Foto" />
          <div className="img-spacer"></div>
          <img src="./2024_images/ssf24m2.jpg" alt="Demo Foto" />
          <div className="img-spacer"></div>
          <img src="./2024_images/ssf24m3.jpg" alt="Demo Foto" />

          <div className="img-spacer"></div>
          <img src="./2024_images/ssf24m4.jpg" alt="Demo Foto" />

          <img src="./chevron-right.svg" alt="" className="arrow" />
        </div> */}
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
      <Spacer height={32} />
      <div className="footer">
        <div>(c)2023-2025 Sternstunden Festival</div>
        <a href="/impressum">IMPRESSUM</a>
        <a href="/datenschutz">DATENSCHUTZ</a>
        <a href="/agb">AGB</a>
        <a href="/faq">FAQ</a>
        <a href="/kontakt">KONTAKT</a>
      </div>
      <Spacer height={32} />

      <img className="footer-logo" src="logo-simple.png" alt="Sternstunden Festival Logo"></img>
      <Spacer height={32} />
    </>
  );
}
