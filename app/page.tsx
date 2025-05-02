import React from "react";
import "../styles/home.css";
import "../styles/common.css";
import Spacer from "../components/Spacer";
import PhotoSlider from "./PhotoSlider";
import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";

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
      <Spacer height={96} />

      <div className="content-box split-box">
        <div className="text-box">
          <div>
            <h2 style={{textAlign: "left"}}>MUSIK TRIFFT KOSMOS</h2>
          </div>
          <br />
          <div>
            <strong>
              Klangvolle Nächte unter dem Sternenzelt, faszinierende Einblicke in die Weiten des Universums und ein Ort voller Geschichte – Willkommen
              auf dem Sternstunden Festival!
            </strong>
            <br />
            <br />
            Seit seiner Premiere im Sommer 2023 lädt das Festival jährlich im Juli auf das Gelände der historischen{" "}
            <strong>Hamburger Sternwarte in Bergedorf</strong> ein. <strong>Freitags ab dem Nachmittag und samstags ab dem Mittag</strong> verwandelt
            sich die weitläufige Parkanlage rund um die denkmalgeschützten Teleskopgebäude in einen Ort der Begegnung mit Musik und Astronomie.
          </div>
          <br />
          <Link className="more-info" href="/info">
            MEHR INFOS...
          </Link>
        </div>
        <div className="responsive-spacer-15"></div>
        <div className="home-image-cropping-wrapper">
          <div className="home-image-wrapper">
            <Image
              src="/sternstunden_festival_home.jpg"
              alt="Foto mit dem Text: 2 Tage Science Slam über 30 Konzerte mehr als 20 Vorträge über 1000 Besucher:innen buntes Kinderprogramm Besichtigungen Foodtrucks und und und"
              width="625"
              height="416"
              className="home-image"
            />
          </div>
        </div>
        <div className="responsive-spacer-15"></div>
      </div>
      <Spacer height={32} />
      <div className="content-box video-container">
        <div>AFTERMOVIE 2024</div>
        <iframe className="video" frameBorder="0" src="https://www.youtube-nocookie.com/embed/H_ZANaTi9Lo?si=Rnq-__7u6C3o3eiM"></iframe>
      </div>
      <Spacer height={32} />
      <div className="content-box" style={{ flexDirection: "column" }}>
        <PhotoSlider photoUrls={photoUrls} /> 
        <strong><a href="https://beyondportrait.de" title="Beyond Portrait Fotografie">Bilder (c) beyond.portrait</a></strong>
      </div>
    </>
  );
}
