import React from "react";
import Image from "next/image";
import "../../styles/boring-pages.css";
import Flex from "@/components/Flex";
import Spacer from "@/components/Spacer";
const MobileAppPage = () => {
  return (
    <div className="boring-page-wrapper">
      <h1>Sternstunden Festival in der Moment App</h1>
      <p>
Du willst den Überblick behalten und dein persönliches Festivalerlebnis planen? Dann lade dir die Moment App aufs Handy!
Dort ist das Sternstunden Festival offiziell gefeatured – besonders praktisch auf dem Smartphone. 
<Spacer height={12} />
✅ Stelle dir dein eigenes Programm zusammen<br/>
✅ Speichere deine Highlights<br/>
✅ Verpasse keine Acts
<Spacer height={12} />
Jetzt kostenlos downloaden & losplanen!<br/>
(Verfügbar im App Store & bei Google Play)
<Spacer height={12} />
      </p>
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
  );
};

export default MobileAppPage;
