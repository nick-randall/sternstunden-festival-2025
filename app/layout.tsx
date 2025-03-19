import React from "react";
import "../styles/background.css";
import Spacer from "@/components/Spacer";
import Image from "next/image";
import Flex from "@/components/Flex";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sternstunden Festival 2025</title>
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
          <div className="page-wrapper">
            <img className="header-logo" src="logo-with-dates.png" alt="Sternstunden Festival Logo" />
            <Spacer height={32} />
            {children}
          </div>
        </div>
        <Spacer height={64} />

        <section className="footer-section">
          <div className="container">
            <Spacer height={32} />

            <a href="https://www.instagram.com/sternstundenfestival">
              <Image src="https://freepnglogo.com/images/all_img/1715966654instagram-logo-png-white.png" alt="" height="40" width="40" />
            </a>
            <a href="mailto:info@sternstundenfestival.de" style={{ textDecoration: "none" }}>
              info@sternstundenfestival.de
            </a>
            <hr style={{ width: "30%" }} />
            <Spacer height={64} />
            {/* <img className="footer-logo" src="logo-simple.png" alt="Sternstunden Festival Logo"></img> */}
            <Flex>
              <img src="/sponsors/excellenzcluster.avif" alt="Bucerius" style={{ height: "100%", width: "100%", padding: "20px" }} />
              <img
                src="/sponsors/bucerius.avif"
                alt="Bucerius"
                style={{ height: "100%", width: "100%", padding: "20px", backgroundColor: "rgb(208, 177, 213)" }}
              />
              <img src="/sponsors/unimusik.avif" alt="Bucerius" style={{ height: "100%", width: "100%", padding: "20px" }} />
              <img src="/sponsors/uni-hamburg.avif" alt="Bucerius" style={{ height: "100%", width: "100%", padding: "20px" }} />
            </Flex>
            <Flex justifyContent="space-between" width="100%">
              <div>©2023-2025 Sternstundenfestival</div>
              <div className="impressum-etc">
                <a href="/impressum">Impressum</a>
                <a href="/datenschutz">Datenschutz</a>
                <a href="/agb">AGB</a>
              </div>
            </Flex>
            <Spacer height={16} />
          </div>
        </section>
      </body>
    </html>
  );
}
