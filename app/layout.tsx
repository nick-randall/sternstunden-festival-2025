import React from "react";
import "../styles/layout.css";
import Spacer from "@/components/Spacer";
import Image from "next/image";
import Flex from "@/components/Flex";
import Menu from "@/components/Menu";
import "../styles/menu.css";
import "../styles/common.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <title>Sternstunden Festival 2025 | Musik und Kosmos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Das Sternstunden Festival vereint inspirierende Konzerterlebnisse in besonderer Umgebung mit spannenden astrophysikalischen Einblicken unter Hamburgs Sternenhimmel in einzigartiger Festivalatmosphäre. "
        />
        <meta
          name="keywords"
          content="Sternstunden Festival, Musikfestival Hamburg, Astronomie Festival, Hamburger Sternwarte, Festival Bergedorf, Musik und Wissenschaft, Kulturfestival, Sommerfestival Hamburg, Kammermusik Festival, Jazzfestival, Electro Pop Festival, Kinderprogramm Festival, Wissenschaft erleben, Teleskopführungen, Astronomie Vorträge, Familienfestival Hamburg, Kultur unter Sternen, Musik trifft Kosmos, Sternstunden Bergedorf, Festival unter Sternenhimmel"
        />
        <meta name="author" content="Sternstunden Festival" />
        <meta charSet="UTF-8" />
        <meta name="twitter:title" content="Sternstunden Festival | Musik und Astronomie" />
        <meta
          name="twitter:description"
          content="Das Sternstunden Festival vereint inspirierende Konzerterlebnisse in besonderer Umgebung mit spannenden astrophysikalischen Einblicken unter Hamburgs Sternenhimmel in einzigartiger Festivalatmosphäre. "
        /><meta name="twitter:image" content="/site-preview.jpg"/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Media queries don't seem to work currently on some mobile devices, as
                a workaround I've put them here in the page layout style tag*/}
        <style>
          {`
            @media screen and (max-width: 768px) {
              .page-wrapper {
                  display: unset;
              }
              .footer {
                flex-direction: column;
                align-items: center;
              }
              .header-logo {
                width: 100%;
              }
              .footer-logo {
                height: 60px;
              }
              .arrow {
                display: none;
              }
              .bg {
                background-image: url('background_mobile.jpg');
              }
              .video {
                min-height: 30vh;
              }
              .content-box .home-image-container img {
                height: 180px;
                width: auto;
              }
              .banner-text {
                animation: slide-left-mobile 25s infinite linear;
              }
              .header-logo {
                display: block;
              }              
              .contact-form-row {
                flex-direction: column;
                align-items: start;
              }
              .gap-for-tablet-and-desktop {
                height: 0px; 
              }
              .photo-grid {
                display: block;
              }

            }
              @media screen and (max-width: 1300px) { 
              .content-box {
                flex-direction: column;
                width: 100%;
              }
              .content-box .responsive-spacer-15 {
                height: 15px;
              }
              .content-box.split-box {
                padding: 15px;
              }
              .home-image {
                height: auto;
                width: 100%;
              }
            }
            @media screen and (max-width: 1080px) { 
              .outer-wrapper { 
                width: 100%;
                display: flex;
                flex-direction: column;
                position: relative;
              }
              .page-wrapper {
               
                width: auto;
                left: auto;
                transform: none;
              }
              .photo-slider img {
                height: 250px;
                width: auto;
              }
              .arrow {
                display: none;  
              }

              .footer-section .container {
                font-size: 0.8em;
              }
              .sponsor-logo-wrap-section {
                flex-wrap: wrap;
              }
             
            @media screen and (min-width: 1580px) {
                .centered-wrapper { 
                  width: auto;
              }
            `}
        </style>
      </head>

      <body>
        <div className="bg"></div>
        <div className="outer-wrapper">
          <Menu />
          <Spacer height={76} />
          <div className="gap-for-tablet-and-desktop" />
          <div className="page-wrapper">{children}</div>
        </div>
        <Spacer height={64} />

        <section className="footer-section">
          <Flex flexDirection="column" alignItems="center">
            <Spacer height={32} />

            <Spacer height={32} />
            <div>
              <strong>Gefördert durch</strong>
            </div>

            <div className="sponsor-logo-wrap-section">

              <div className="sponsor-logo-row">
                <div className="sponsor-logo-container">
                  <a href="https://www.zeit-stiftung.de" target="_blank" title="Zeit Stiftung Bucerius">
                    <Image
                      src="/sponsors/zeit-stiftung-bucerius.png"
                      alt="Zeit Stiftung Bucerius"
                      height="136"
                      width="296"
                      className="sponsor-logo"
                    />
                  </a>
                </div>

                <div className="sponsor-logo-container">
                  <a href="https://www.claussen-simon-stiftung.de/de" target="_blank" title="Claussen Simon Stiftung">
                    <Image
                      src="/sponsors/claussen-simon-stiftung.png"
                      alt="Claussen Simon Stiftung"
                      height="669"
                      width="1720"
                      className="sponsor-logo"
                    />
                  </a>
                </div>
                             
                <div className="sponsor-logo-container">
                  <a href="https://www.uni-hamburg.de/exzellenz/exzellenzcluster.html" target="_blank" title="Exzellenzcluster">
                    <Image src="/sponsors/excellenzcluster.png" alt="Excellenzcluster" width="400" height="78" className="sponsor-logo" />
                  </a>
              </div>
</div>
</div>

<Spacer height={32} />
            <div>
              <strong>Gesponsert durch</strong>
            </div>

<div className="sponsor-logo-wrap-section2">


              <div className="sponsor-logo-row">
                <div className="sponsor-logo-container">
                  <a href="https://www.bergedorf-bille.de/" target="_blank" title="Bergedorf Bille">
                    <Image src="/sponsors/bergedorf_bille.png" alt="Bergedorf Bille" width="400" height="78" className="sponsor-logo" />
                  </a>
                </div>
                
                <div className="sponsor-logo-container">
                  <a href="https://www.asta-uhh.de/" target="_blank" title="AStA Hamburg">
                    <Image src="/sponsors/asta.png" alt="AStA Hamburg" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>
                  
                <div className="sponsor-logo-container">
                  <a href="https://www.european-gmbh.de/" target="_blank" title="European GmbH">
                    <Image src="/sponsors/european_logo.png" alt="European GmbH" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>
                  
                <div className="sponsor-logo-container">
                  <a href="https://sternstundenfestival.de" target="_blank" title="Fernandez Medien- und Eventtechnik">
                    <Image src="/sponsors/fernandez.png" alt="Fernandez Medien- und Eventtechnik" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>
                  
                <div className="sponsor-logo-container">
                  <a href="https://freshmen.media/" target="_blank" title="Freshmen Media">
                    <Image src="/sponsors/freshmen.png" alt="Freshmen Media" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>
                
                <div className="sponsor-logo-container">
                  <a href="https://www.kaiser-showtechnik.de/" target="_blank" title="Kaiser Showtechnik">
                    <Image src="/sponsors/kaiser.png" alt="Kaiser Showtechnik" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>
                  
                <div className="sponsor-logo-container">
                  <a href="https://www.nordlicht-verleih.de/" target="_blank" title="Nordlicht Verleih">
                    <Image src="/sponsors/nordlicht.png" alt="Nordlicht Verleih" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>
        
                <div className="sponsor-logo-container">
                  <a href="https://www.nordlite.de/" target="_blank" title="Nordlite Veranstaltungstechnik GmbH">
                    <Image src="/sponsors/nordlite.png" alt="Nordlite Veranstaltungstechnik GmbH" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>
                 
                <div className="sponsor-logo-container">
                  <a href="https://www.visiontools.de/" target="_blank" title="Vision Tools">
                    <Image src="/sponsors/visiontools.png" alt="Vision Tools" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>

                 <div className="sponsor-logo-container">
                  <a href="https://www.momentevents.co/" target="_blank" title="Moment App">
                    <Image src="/sponsors/moment.png" alt="Moment App" width="400" height="78" className="sponsor-logo" />
                  </a>
                  </div>

                  </div> 
                                   

                  
</div>

<Spacer height={32} />
            <div>
              <strong>Partner:innen</strong>
            </div>

<div className="sponsor-logo-wrap-section3">

              <div className="sponsor-logo-row">
                <div className="sponsor-logo-container">
                  <a href="https://www.haw-hamburg.de/" target="_blank" title="HAW Hamburg">
                    <Image src="/sponsors/hawhamburg.png" alt="HAW Hamburg" height="155" width="336" className="sponsor-logo" />
                  </a>
                </div>
              
                <div className="sponsor-logo-container">
                  <a href="https://www.unimusik.uni-hamburg.de/ueber-unimusik/foerderverein-unimusik.html" target="_blank" title="Unimusik Förderverein">
                    <Image src="/sponsors/unimusik-foerderverein.png" alt="Unimusik Förderverein" height="155" width="336" className="sponsor-logo" />
                  </a>
                </div>
              
                <div className="sponsor-logo-container">
                  <a href="https://www.unimusik.uni-hamburg.de/" target="_blank" title="Univmusik Hamburg"> 
                    <Image src="/sponsors/UHH_Wortmarken_Unimusik_DIN_A4.png" alt="Unimusik Hamburg Sponsor" width="375" height="123" className="sponsor-logo" />
                  </a>
                </div>

                <div className="sponsor-logo-container">
                  <a href="https://www.physik.uni-hamburg.de/hs.html" target="_blank" title="Hamburger Sternwarte">
                    <Image src="/sponsors/UHH_Wortmarke_Sternwarte.png" alt="Hamburger Sternwarte" width="400" height="78" className="sponsor-logo" />
                  </a>
                </div>
              
                <div className="sponsor-logo-container">
                  <a href="https://www.fhsev.de/" target="_blank" title=" Förderverein Hamburger Sternwarte">
                    <Image src="/sponsors/fhs.png" alt="Förderverein Hamburger Sternwarte" width="400" height="78" className="sponsor-logo" />
                  </a>
                </div>
              </div>

                <div className="sponsor-logo-container">
                  <a href="https://cherryontop.film/" target="_blank" title="cherryontop">
                    <Image src="/sponsors/cherry.png" alt="cherryontop.film" width="336" height="155"  className="sponsor-logo" />
                  </a>
                </div>
 </div>

            <Spacer height={32} />
            <a href="https://www.instagram.com/sternstundenfestival" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://freepnglogo.com/images/all_img/1715966654instagram-logo-png-white.png"
                alt="instagram logo"
                height="40"
                width="40"
              />
            </a>

            <div className="impressum-etc-row">
              <div className="impressum-etc">
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
                <Link href="/agb">AGB</Link>
              </div>
            </div>

            <div>©2023-2025 Sternstunden Festival</div>
            <Spacer height={32} />
          </Flex>
        </section>
      </body>
    </html>
  );
}
