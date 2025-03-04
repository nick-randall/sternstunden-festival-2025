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
          {`@media screen and (max-width: 1080px) {
              .content-box {
                flex-direction: column;
              }
              .content-box .responsive-spacer-15 {
                height: 15px;
              }
            }
            @media screen and (max-width: 768px) {
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
              .bg {
                background-image: url('background_mobile.jpg');
              }
              .video {
                min-height: 30vh;
              }

            }
            @media screen and (min-width: 1080px) { 
              .centered-wrapper {
                  position: absolute;
                  margin-top: 5rem;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 80%;
                }
              }
            `}
        </style>
      </head>

      <body>
        <div className="bg"></div>
        <div className="centered-wrapper">
          <div className="page-wrapper">
            <img className="header-logo" src="logo-with-dates.png" alt="Sternstunden Festival Logo" />
            <Spacer height={32}/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
