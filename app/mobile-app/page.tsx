import React from "react";
import Image from "next/image";
import "../../styles/boring-pages.css";
import Flex from "@/components/Flex";
import Spacer from "@/components/Spacer";
const MobileAppPage = () => {
  return (
    <div className="boring-page-wrapper">
      <h1>Offizielle Festival-App</h1>
      <Flex flexDirection="column" alignItems="center">
        <a href="https://go.getmoment.events/playstore">
          <Image className="app-store-logo" src="/google-play-logo.png" alt="Google Play Store Logo" height="185" width="622" />
        </a>

        <Spacer height={10} />
        <a href="https://go.getmoment.events/appstore">
          <Image className="app-store-logo" src="/apple-store-logo.png" alt="Apple App Store Logo" height="185" width="622" />
        </a>
      </Flex>
    </div>
  );
};

export default MobileAppPage;
