import React from "react";
import "../styles/background.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       
          <div className="bg-distortion">
          <div className="bg-gradient">
            <div className="bg-triangles">
              <div className="page-wrapper">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
