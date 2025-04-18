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

      <div className="content-box split-box">
        <div className="text-box">
          <div>
            Zum dritten Mal wird die Hamburger Sternwarte in Bergedorf zu einer Begegnungsstätte der Klänge und Sterne. Das junge Festival bietet in
            einer einzigartigen Location ein vielfältiges Programm, das sowohl Musik als auch Wissenschaft umfasst. Mit seinem bunten Angebot an
            Konzerten, Vorträgen, Himmelsbeobachtungen und Kinderaktivitäten ist auf dem Sternstunden Festival für alle Altersgruppen etwas dabei. Das
            Festival ist eine ehrenamtliche Initiative der Unimusik der Universität Hamburg in Zusammenarbeit mit der Hamburger Sternwarte in
            Bergedorf, die zum Fachbereich Physik gehört.
          </div>
          <br />
          <a className="more-info" href="/info">
            MEHR INFOS
          </a>
        </div>
        <div className="responsive-spacer-15"></div>
        <div className="home-image-wrapper">
          <Image
            src="/sternstunden_festival_home.jpg"
            alt="Foto mit dem Text: 2 Tage 5 Bühnen über 30 Konzerte mehr als 20 Vorträge über 1000 Besucher:innen buntes Kinderprogramm Besichtigungen Foodtrucks und und und"
            width="625"
            height="416"
            className="home-image"
          />
        </div>
        <div className="responsive-spacer-15"></div>
      </div>
      <Spacer height={32} />
      <div className="content-box video-container">
        <div>AFTERMOVIE 2024</div>
        <iframe className="video" frameBorder="0" src="https://www.youtube-nocookie.com/embed/H_ZANaTi9Lo?si=Rnq-__7u6C3o3eiM"></iframe>
      </div>
      <Spacer height={32} />
        <div className="content-box">
          <PhotoSlider photoUrls={photoUrls} />
        </div>

    </>
  );
}
