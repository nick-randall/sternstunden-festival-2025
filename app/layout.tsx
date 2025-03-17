import React from "react";
import "../styles/background.css";
import Spacer from "@/components/Spacer";

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
              .centered-wrapper {
                  position: unset;
                  margin-top: auto;
                  left: auto;
                  transform: none;
                  width: auto;
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
        <div className="centered-wrapper">
          <div className="page-wrapper">
            <img className="header-logo" src="logo-with-dates.png" alt="Sternstunden Festival Logo" />
            <Spacer height={32} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
