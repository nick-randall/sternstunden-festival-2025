import React from "react";
import "../styles/home.css";
import "../styles/common.css";
import Spacer from "../components/Spacer";
import PhotoSlider from "./PhotoSlider";
import Image from "next/image";
import Zoomable from "@/components/Zoomable";
import { getPlaceholderImage } from "@/helper_functions/createBlurredImages";
import Link from "next/link";
const rootUrl = "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2025_photos/";

const initial = ["ssf25m001", "ssf25m002", "ssf25m003", "ssf25m004", "ssf25m005", "ssf25m006", "ssf25m007", "ssf25m008", "ssf25m009", "ssf25m010", "ssf25m011", "ssf25m012", "ssf25m013", "ssf25m014",
"ssf25m015", "ssf25m016", "ssf25m017", "ssf25m018", "ssf25m019", "ssf25m020", "ssf25m021", "ssf25m022", "ssf25m023", "ssf25m024", "ssf25m025", "ssf25m026", "ssf25m027", "ssf25m028", "ssf25m029", "ssf25m030", "ssf25m031"];

export default async function Page() {
  const photoUrls = [];
  // const photoComponents = [];
  for (let i = 0; i < initial.length; i++) {
    photoUrls.push(`${rootUrl}${initial[i]}.jpg`);
  }
  let imagesWithPlaceholders: ImageWithPlaceholder[] = [];

  for (let i = 1; i < 109; i++) {
    if (i === 109) continue;
    photoUrls.push(`https://sternstunde.s3.ap-southeast-2.amazonaws.com/2025_photos/ssf25_${i}.jpg`);
  }
  /*for (let i = 1; i < 32; i++) {
    if (i === 32) continue;
    photoUrls.push(`https://sternstunde.s3.ap-southeast-2.amazonaws.com/2025_photos/ssf25m0${i}.jpg`);
  }*/
  const usePlaceHolders = process.env.GENERATE_PLACEHOLDERS !== "false";

  if (usePlaceHolders) {
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
  } else {
    imagesWithPlaceholders = photoUrls.map((src: string) => ({ src }));
  }

  return (
    <>
      <Image className="header-logo" src="/logo-without-dates.png" alt="Sternstunden Festival Logo" width="827" height="434" />
        <div className="content-box">


                <Image
                    src="/SSF26_Briefkopf.jpg"
                    alt="Ankündigung Sternstunden Festival 17. & 18. Juli"
                    width="1240"
                    height="877"
                    className="hom-image"
                />

        </div>
        <div className="responsive-spacer-15"></div>
        <div className="content-box split-box">
        <div className="text-box">
          <div>
            <h2 style={{ textAlign: "left" }}> Es gibt Tickets!</h2>
          </div>

          <div>
              Seit dem <strong> 17.04.2026 </strong>  gibt es wieder Early-Bird-Tickets.
              <br />
              <br />
              <strong> Sichert euch euer Ticket</strong>

              <Link href=" /tickets" target="_blank"> hier! </Link>
              <br />
              <br />
               Und <Link href=" /programm" target="_blank"> hier </Link>  gibt's einen kleinen Sneak Peak, auf was ihr euch dieses Jahr freuen könnt. <br />
              <br /> Mehr zum Programm verraten wir euch bald.

          </div>
        </div>
        <div className="responsive-spacer-15"> </div>
        <div className="home-image-cropping-wrapper">
          <div className="home-image-wrapper">
                <Link href="/programm" target="_blank" title="Programm 2026">
                    <Image
                        src="/Programmpost.png"
                        alt="Programm-Ankündigung Sternstundenfestival 2026"
                        width="1700"
                        height="1700"
                        className="home-image"
                    />
                </Link>
          </div>
        </div>
        <div className="responsive-spacer-15"></div>
      </div>

      <Spacer height={32} />

        {/* <div className="content-box">
        <Zoomable title="Musikalisches Lineup 2025">
          <Image
            src="/lineup2025.jpg"
            alt="Musikalisches Lineup 2025 / Sternstunden Festival 18. & 19. Juli"
            width="1080"
            height="864"
            className="hom-image"
          />
        </Zoomable>
      </div>*/}

      <Spacer height={32} />
        <div className="content-box video-container">
            <div>AFTERMOVIE 2025</div>
            <iframe className="video"  frameBorder="0"
                    src="https://www.youtube-nocookie.com/embed/XGiNFSrd4oA?si=NTvr_Y7HMB3X5IxF"></iframe>
        </div>
        <Spacer height={32}/>
        <div className="content-box" style={{flexDirection: "column"}}>
            <PhotoSlider imagesWithPlaceholders={imagesWithPlaceholders}/>
            <strong>Rückblick 2025</strong>
            <a href="https://beyondportrait.de" target="_blank" title="Beyond Portrait Fotografie">
                (c) beyond.portrait &#10154;
        </a>
      </div>
    </>
  );
}
