import React from "react";
import "../styles/background.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sternstunden Festival 2025</title>
          <style>
          {
            `@media screen and (max-width: 1080px) {
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
            }  
            @media screen and (max-width: 768px) {
              .header-logo {
                height: 300px;
              }
              .footer-logo {
                height: 150px;
              }
            }   
            `}
  </style>
      </head>
      
      <body>
        <div className="bg-distortion">
          <div className="bg-gradient">
            <div className="bg-triangles">
              <div className="page-wrapper">
                <img className="header-logo" src="logo-with-dates.png" alt="Sternstunden Festival Logo" />

                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
