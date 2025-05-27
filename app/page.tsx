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
          <h2 style={{textAlign: "left"}}>MUSIK TRIFFT <span style={{
  hyphens: "none", 
  WebkitHyphens: "none", 
  msHyphens: "none"
}}>KOSMOS</span></h2>
          </div>

          <div>
            <strong>
              Klangvolle Nächte unter dem Sternenzelt, faszinierende Einblicke in die Weiten des Universums und ein Ort voller Geschichte – Willkommen
              auf dem Sternstunden Festival!
            </strong>
            <Spacer height={32} />
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
      <div className="content-box">
      <div className="text-box2">
          <div>
          <h2 style={{textAlign: "left"}}><span style={{
  hyphens: "none", 
  WebkitHyphens: "none", 
  msHyphens: "none"
}}>LINEUP 2025</span></h2>
          </div>

          <div>
            <strong>
          
<h1>
  <a href="https://linktr.ee/AnahitVardanyan " target="_blank">Anahit Vardanyan</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="20" height="20" />&nbsp;&nbsp;
  <a href="https://rocket-men.com/" target="_blank">Rocket Men</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="20" height="20" />&nbsp;&nbsp;
  <a href="https://linktr.ee/Yousefk" target="_blank">Yousef Kekhia</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="20" height="20" />&nbsp;&nbsp;
  <a href="https://noukmusik.de/" target="_blank">NOUK</a>
  </h1>
  
<h2>
  <a href="https://www.pouyaabdimusic.com/projects" target="_blank">Bald Bald</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://m.soundcloud.com/bow-brothers" target="_blank">Bow Brothers</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.duosu.de" target="_blank">Duo SU</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.fjcello.eu" target="_blank">Felix Jedeck</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://on.soundcloud.com/se6fqL66CfTDezj47" target="_blank">Forehead</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://deaf-anthropologist.bandcamp.com/album/in-vivo" target="_blank">IN VIVO Kosmos</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://linktr.ee/insa.music" target="_blank">INSA</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.julieweissbach.de/" target="_blank">Julie Weißbach</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://linktr.ee/kurkapellesonnendeck" target="_blank">Kurkapelle Sonnendeck</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.instagram.com/lucidrobberyofficial/" target="_blank">Lucid Robbery</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.pabameto.com/quartett/" target="_blank">Pabameto Quartett (Community Dance)</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.youtube.com/watch?v=nV609OqIEE4" target="_blank">Panimo</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.justuswolf.com/pepziecarola-1" target="_blank">pepziecarola</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://quabla-band.com" target="_blank">Quabla</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.pouyaabdimusic.com/projects" target="_blank">Sebastian Gietz Quintett</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.simonsagtmusik.de" target="_blank">Simon sagt</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://www.unimusik.uni-hamburg.de/ensembles/big-band.html" target="_blank">Skyliner Bigband</a>&nbsp; <Image src="/star.svg" alt="star symbol" width="15" height="15" />&nbsp;&nbsp;
  <a href="https://linktr.ee/TonioGeugelin" target="_blank">Tonio Geugelin</a>  
  </h2>
            </strong>
Alsterquintett&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Bettina & Bettina&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Chorchester Collab&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Die Junge Camerata&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Duo: Sternzeichen Geige Aszendent Klavier&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Ensemble Heißer Scheiß&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Ensemble Nachtklang&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Gregor in der Kuppel&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
High Five / Azul&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Horn Ensemble&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Immanuel&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Kometen-Quintett&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Lanbo & Jia-Xi&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
LeSaTo&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
lili j. m.&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Malte & Malte&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Nil&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Nimm 8&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Nine Strings Attached&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Protostellar Core&nbsp; <Image src="/star.svg" alt="star symbol" width="10" height="10" />&nbsp;&nbsp;
Sternschubert-Quintett
          </div>
       
        </div>
        </div>
      
      <Spacer height={32} />
      <div className="content-box video-container">
        <div>AFTERMOVIE 2024</div>
        <iframe className="video" frameBorder="0" src="https://www.youtube-nocookie.com/embed/H_ZANaTi9Lo?si=Rnq-__7u6C3o3eiM"></iframe>
      </div>
      <Spacer height={32} />
      <div className="content-box" style={{ flexDirection: "column" }}>
        <PhotoSlider photoUrls={photoUrls} /> 
        <strong><a href="https://beyondportrait.de" target="_blank" title="Beyond Portrait Fotografie">Bilder (c) beyond.portrait &#10154;</a></strong>
      </div>
    </>
  );
}
