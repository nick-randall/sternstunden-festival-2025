import React from "react";
import "../styles/layout.css";
import Spacer from "@/components/Spacer";
import Image from "next/image";
import Flex from "@/components/Flex";
import Menu from "@/components/Menu";
import "../styles/menu.css";
import "../styles/common.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sternstunden Festival 2025</title>
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
              .gap-for-desktop-only {
                height: 0px; 
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
                  margin-top: auto;
                  width: auto;
                  left: auto;
                  transform: none;

                }
              .content-box {
                flex-direction: column;
                width: 100%;
              }
              .content-box .responsive-spacer-15 {
                height: 15px;
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
          <div className="gap-for-desktop-only" />
          <div className="page-wrapper">
            {children}
          </div>
        </div>
        <Spacer height={64} />

        <section className="footer-section">
          <Flex flexDirection="column" alignItems="center">
            <Spacer height={32} />

            <a href="https://www.instagram.com/sternstundenfestival">
              <Image src="https://freepnglogo.com/images/all_img/1715966654instagram-logo-png-white.png" alt="" height="40" width="40" />
            </a>
            <a href="mailto:info@sternstundenfestival.de" style={{ textDecoration: "none", color: "#15152A" }}>
              info@sternstundenfestival.de
            </a>
            <hr style={{ width: "30%" }} />
            <Spacer height={64} />
            <div className="sponsor-logo-wrap-section">
              <div className="sponsor-logo-row">
                <div className="sponsor-logo-container">
                  <a href="https://www.uni-hamburg.de/">
                    <Image src="/sponsors/uni-hamburg.png" alt="Uni Hamburg Sponsor" width="375" height="123" className="sponsor-logo" />
                  </a>
                </div>

                <div className="sponsor-logo-container">
                  <a href="https://www.unimusik.uni-hamburg.de/ueber-unimusik/foerderverein-unimusik.html">
                    <Image src="/sponsors/unimusik-foerderverein.png" alt="Unimusik Förderverein" height="155" width="336" className="sponsor-logo" />
                  </a>
                </div>
              </div>

              <div className="sponsor-logo-row">
                <div className="sponsor-logo-container">
                  <a href="https://www.zeit-stiftung.de">
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
                  <a href="https://www.claussen-simon-stiftung.de/de">
                    <Image
                      src="/sponsors/claussen-simon-stiftung.png"
                      alt="Claussen Simon Stiftung"
                      height="669"
                      width="1720"
                      className="sponsor-logo"
                    />{" "}
                  </a>
                </div>
              </div>

              <div className="sponsor-logo-row">
                <div className="sponsor-logo-container">
                  <a href="https://www.uni-hamburg.de/exzellenz/exzellenzcluster.html">
                    <Image src="/sponsors/excellenzcluster.png" alt="Excellenzcluster" width="400" height="78" className="sponsor-logo" />
                  </a>
                </div>
              </div>
              <div className="sponsor-logo-row">
                <div className="sponsor-logo-container">
                  <a href="https://www.physik.uni-hamburg.de/hs.html">
                    <Image src="/sponsors/UHH_Wortmarke_Sternwarte.png" alt="Hamburger Sternwarte" width="400" height="78" className="sponsor-logo" />
                  </a>
                </div>
              </div>
            </div>

            <Spacer height={32} />

            <div className="impressum-etc-row">
              <div>©2023-2025 Sternstundenfestival</div>
              <div className="impressum-etc">
                <a href="/impressum">Impressum</a>
                <a href="/datenschutz">Datenschutz</a>
                <a href="/agb">AGB</a>
              </div>
            </div>
            <Spacer height={32} />
          </Flex>
        </section>
      </body>
    </html>
  );
}
