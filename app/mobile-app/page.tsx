import React from "react";
import Image from "next/image";
import "../../styles/boring-pages.css";
import "../../styles/home.css";
import "../../styles/mobile-app-page.css";
import Flex from "@/components/Flex";
import Spacer from "@/components/Spacer";
const MobileAppPage = () => {
  return (
    <div className="boring-page-wrapper">
      <style>{`
        @media (max-width: 768px) {
            .desktop-and-tablet-only {
              display: none;  
            }
            .responsive-flex {
              flex-direction: column;
            } 
            .content-box.split-box {
              flex-direction: column;
            }
          }
          @media (min-width: 768px) {
            .mobile-only {
              display: none;  
            }
          }
        
        `}</style>
      <h1>Sternstunden Festival in der Moment App</h1>
      <div className="responsive-flex">
        <p>
          Du willst den Überblick behalten und dein persönliches Festivalerlebnis planen? Dann lade dir die Moment App aufs Handy! Dort ist das
          Sternstunden Festival offiziell gefeatured - besonders praktisch auf dem Smartphone.
          <div className="desktop-and-tablet-only">
            ✅ Stelle dir dein eigenes Programm zusammen
            <br />
            ✅ Speichere deine Highlights
            <br />
            ✅ Verpasse keine Acts
            <Spacer height={12} />
            Jetzt kostenlos downloaden & losplanen!
            <br />
            (Verfügbar im App Store & bei Google Play)
            <Spacer height={12} />
          </div>
        </p>

        <Spacer width={20} />

        <Image src="/moment-half.jpeg" alt="Moment App Screenshot" height="1516" width="700" className="moment-app-screenshot" />
        <Spacer width={20} />
      </div>

      <Spacer height={12} />
      <div>
        <div className="mobile-only">
          ✅ Stelle dir dein eigenes Programm zusammen
          <br />
          ✅ Speichere deine Highlights
          <br />
          ✅ Verpasse keine Acts
          <Spacer height={12} />
          Jetzt kostenlos downloaden & losplanen!
          <br />
          (Verfügbar im App Store & bei Google Play)
        </div>
        <Spacer height={12} />
        <Flex flexDirection="column" alignItems="left">
          <a href="https://go.getmoment.events/playstore">
            <Image className="app-store-logo" src="/google-play-logo.png" alt="Google Play Store Logo" height="185" width="622" />
          </a>
          <Spacer height={12} />
          <a href="https://go.getmoment.events/appstore">
            <Image className="app-store-logo" src="/apple-store-logo.png" alt="Apple App Store Logo" height="185" width="622" />
          </a>
        </Flex>
      </div>
    </div>
  );
};

export default MobileAppPage;

// import React from "react";
// import Image from "next/image";
// import "../../styles/boring-pages.css";
// import Flex from "@/components/Flex";
// import Spacer from "@/components/Spacer";
// const MobileAppPage = () => {
//   return (
//     <div className="boring-page-wrapper">
//       <h1>Offizielle Festival-App</h1>
// <div className="content-box">
//   <p>
//     Unsere offiziele Festival-App ist jetzt verfügbar! Mit der App kannst du dir dein persönliches Programm zusammenstellen, die neuesten
//     Informationen zum Festival erhalten und vieles mehr. Die App wird auf der &quot;moment&quot; Plattform bereitgestellt. Bitte lade sie dir
//     aus dem App Store oder Google Play Store herunter, um alle Funktionen zu nutzen.
//   </p>
//   <Spacer width={20} />
//   <Image src="/moment.jpeg" alt="Moment App Screenshot" height="1516" width="700" className="moment-app-screenshot" />
// </div>

//       <Flex flexDirection="column" alignItems="center">
//         <a href="https://go.getmoment.events/playstore">
//           <Image className="app-store-logo" src="/google-play-logo.png" alt="Google Play Store Logo" height="185" width="622" />
//         </a>
//         <Spacer height={10} />
//         <a href="https://go.getmoment.events/appstore">
//           <Image className="app-store-logo" src="/apple-store-logo.png" alt="Apple App Store Logo" height="185" width="622" />
//         </a>
//       </Flex>
//     </div>
//   );
// };

// export default MobileAppPage;
