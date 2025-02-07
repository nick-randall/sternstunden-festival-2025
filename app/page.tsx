import React from "react";
import "../styles/home.css";
import "../styles/common.css";
import Spacer from "../components/Spacer";

export default function Page() {
  return (
    <>
      <img className="header-logo" src="logo-with-dates.png" alt="Sternstunden Festival Logo" />
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
        <div className="responsive-spacer-32"></div>
        <div className="home-image-container">
          <img style={{ maxWidth: "100%" }} src="demo-photo.png" alt="Demo Foto" />
        </div>
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
      <Spacer height={32}/>
      <div className="footer">
        <div>(c)2023-2025 Sternstunden Festival</div>
        <a href="/impresseum">IMPRESSUM</a>
        <a href="/datenschutz">DATENSCHUTZ</a>
        <a href="/agb">AGB</a>
        <a href="/faq">FAQ</a>
        <a href="/kontakt">KONTAKT</a>
      </div>
      <img className="footer-logo" src="logo-simple.png" alt="Sternstunden Festival Logo"></img>
    </>
  );
}
