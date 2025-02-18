import React from "react";
import "../styles/background.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       
          <div className="bg-distortion">
          <div className="bg-gradient">
            <div className="bg-triangles">
              <div className="page-wrapper">
              <img className="header-logo" src="logo-with-dates.png" alt="Sternstunden Festival Logo" />

                {children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
