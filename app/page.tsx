import React from "react";
import "../styles/home.css";
import "../styles/common.css";
import Spacer from "../components/Spacer";
import PhotoSlider from "./PhotoSlider";
import Image from "next/image";
import Zoomable from "@/components/Zoomable";
import { getPlaceholderImage } from "@/helper_functions/createBlurredImages";

const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/";
const initial = ["ssf24m43", "ssf24m115", "ssf24m112", "ssf24m113", "ssf24m44", "ssf24m108"];

export default async function Page() {
  const photoUrls = [];
  // const photoComponents = [];
  for (let i = 0; i < initial.length; i++) {
    photoUrls.push(`${rootUrl}${initial[i]}.jpg`);
  }
  let imagesWithPlaceholders: ImageWithPlaceholder[] = [];

  for (let i = 1; i < 115; i++) {
    if (i === 80) continue;
    photoUrls.push(`https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24m${i}.jpg`);
  }
  for (let i = 1; i < 87; i++) {
    if (i === 66) continue;
    photoUrls.push(`https://sternstunde.s3.ap-southeast-2.amazonaws.com/2024_photos/ssf24${i}.jpg`);
  }

  try {
    imagesWithPlaceholders = await Promise.all(
      photoUrls.map(async (src: string) => {
        const imageWithPlaceholder = await getPlaceholderImage(src);
        return imageWithPlaceholder;
      })
    );
    // for (let i = 0; i < photoUrls.length; i++) {
    //   const url = photoUrls[i];
    //   const response = await fetch(url, { method: "HEAD" });
    //   if (!response.ok) {
    //     console.error(`Image not found: ${url}`);
    //     continue;
    //   }

    //   photoComponents.push(
    //     <Image
    //       key={`photo-${i}`}
    //       height={300}
    //       width={300}
    //       src={url}
    //       alt="Rückblick Foto Sternstunden Festival 2024"
    //       priority={i < 10}
    //       loading={i < 10 ? "eager" : "lazy"}
    //     />
    //   );
    // }
  } catch (error) {
    console.error("Error fetching images:", error);
  }

  return (
    <>
      <Image className="header-logo" src="/logo-with-dates.png" alt="Sternstunden Festival Logo" width="827" height="434" />

      <div className="content-box split-box">
        <div className="text-box">
          <div>
            <h2 style={{ textAlign: "left" }}>
       RÜCKBLICK 2025
            </h2>
          </div>

          <div>
Seit seiner Premiere im Sommer 2023 lädt das Festival jährlich im Juli auf das Gelände der historischen <strong>Hamburger Sternwarte in Bergedorf</strong> ein. Auch 2025 wurde die weitläufige Parkanlage rund um die denkmalgeschützten Teleskopgebäude wieder zu einem lebendigen Ort der Begegnung mit <strong>Musik und Astronomie</strong> – mit Konzerten, Sternenführungen, Kinderprogramm, Wissenschaft, Gemeinschaftstanz und vielem mehr.            <Spacer height={32} />
            <strong>Danke an alle Besucher:innen, Künstler:innen und Mitwirkenden für ein unvergessliches Wochenende!</strong>
            <Spacer height={32} />
          Bleibt gespannt – die Planungen für 2026 laufen bereits!         
          </div>
        </div>
        <div className="responsive-spacer-15"></div>
        <div className="home-image-cropping-wrapper">
          <div className="home-image-wrapper">
            <Zoomable title="Sternstunden Festival 2024">
              <Image
                src="/sternstunden_festival_home.jpg"
                alt="Foto mit dem Text: 2 Tage Science Slam über 30 Konzerte mehr als 20 Vorträge über 1000 Besucher:innen buntes Kinderprogramm Besichtigungen Foodtrucks und und und"
                width="625"
                height="416"
                className="home-image"
              />
            </Zoomable>
          </div>
        </div>
        <div className="responsive-spacer-15"></div>
      </div>
      
      <Spacer height={32} />
      
      <div className="content-box">
        <Zoomable title="Musikalisches Lineup 2025">
          <Image
            src="/lineup2025.jpg"
            alt="Musikalisches Lineup 2025 / Sternstunden Festival 18. & 19. Juli"
            width="1080"
            height="864"
            className="hom-image"
          />
        </Zoomable>
      </div>
      
      <Spacer height={32} />
      <div className="content-box video-container">
        <div>AFTERMOVIE 2024</div>
        <iframe className="video" frameBorder="0" src="https://www.youtube-nocookie.com/embed/H_ZANaTi9Lo?si=Rnq-__7u6C3o3eiM"></iframe>
      </div>
      <Spacer height={32} />
      <div className="content-box" style={{ flexDirection: "column" }}>
        <PhotoSlider imagesWithPlaceholders={imagesWithPlaceholders} />
        <strong>Rückblick 2024</strong>
          <a href="https://beyondportrait.de" target="_blank" title="Beyond Portrait Fotografie">
             (c) beyond.portrait &#10154;
          </a>
      
      </div>
    </>
  );
}
