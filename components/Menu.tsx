"use client";

import "../styles/menu.css";
import useMediaQuery from "./useMediaQuery";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Menu: React.FC = () => {
  const { screenWidth } = useMediaQuery();

  if (screenWidth > 768) {
    return <DesktopMenu />;
  }
  return <MobileMenu />;
};

export default Menu;
