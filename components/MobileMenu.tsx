"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currSubMenu, setCurrSubMenu] = useState<MenuItem>("");
  const [closingSubMenu, setClosingSubMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (isOpen) {
      const menu = menuRef.current;
      if (menu) {
        // wait for end of animation, then close sub-menu
        const handleMenuClosed = () => {
          setCurrSubMenu("");
          menuRef.current?.removeEventListener("transitionend", handleMenuClosed);
        };
        menuRef.current?.addEventListener("transitionend", handleMenuClosed);
      }
    }

    setIsOpen(!isOpen);
  };

  const handleBackToMainMenu = () => {
    setClosingSubMenu(true);
    const menu = menuRef.current;
    if (menu) {
      // wait for end of animation, then close sub-menu
      const handleMenuClosed = () => {
        setCurrSubMenu("");
        menuRef.current?.removeEventListener("transitionend", handleMenuClosed);
        setClosingSubMenu(false);
      };
      menuRef.current?.addEventListener("transitionend", handleMenuClosed);
    }
  };

  return (
    <><div className="barrier" onClick={toggleMenu} style={{height: isOpen ? "100vh": 0}}/>
      <div className="menu-wrapper mobile">
        <div className="mobile-menu-bar">
          <Link href="/" className="menu-item-container" style={{ position: "relative" }}>
            <Image className="menu-item logo" src="/logo-simple.png" alt="Sternstunden Festival Logo" width="826" height="483" />
          </Link>
          <div className="menu-item-container" onClick={toggleMenu}>
            <div className="menu-item hamburger">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
          </div>
        </div>
        <div className="mobile-menu" ref={menuRef} style={{ transform: currSubMenu !== "" && !closingSubMenu ? "translateX(-100%)" : "" }}>
          <div style={{ position: "relative" }}>
            <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
              <Link href="/tickets" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Tickets</div>
              </Link>
            </div>
            <div className={`mobile-menu-item ${isOpen ? "open" : ""}`} onClick={() => setCurrSubMenu("programm")}>
              <div className="mobile-menu-item-text">Programm</div>
            </div>
            <div className={`mobile-menu-item ${isOpen ? "open" : ""}`} onClick={() => setCurrSubMenu("info")}>
              <div className="mobile-menu-item-container">
                <div className="mobile-menu-item-text">Info</div>
              </div>
            </div>
            <div className={`mobile-menu-item ${isOpen ? "open" : ""}`} onClick={() => setCurrSubMenu("info")}>
              <div className="mobile-menu-item-container">
                <div className="mobile-menu-item-text">Kontakt</div>
              </div>
            </div>
          </div>
          <div className="mobile-sub-menu">
            <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
              <div onClick={handleBackToMainMenu}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="https://www.pinclipart.com/picdir/big/544-5440422_back-arrow-icon-transparent-png-clipart-free-download.png"
                    alt=""
                    style={{ height: 30 }}
                  />
                </div>
              </div>
            </div>
            {currSubMenu === "programm" && (
              <>
                <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                  <Link href="/timetable" className="mobile-menu-item-container" onClick={toggleMenu}>
                    <div className="mobile-menu-item-text">Timetable</div>
                  </Link>
                </div>
                <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                  <Link href="/kuenstlerinnen" className="mobile-menu-item-container" onClick={toggleMenu}>
                    <div className="mobile-menu-item-text">Künstler:innen</div>
                  </Link>
                </div>
                <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                  <Link href="/planeten" className="mobile-menu-item-container" onClick={toggleMenu}>
                    <div className="mobile-menu-item-text">Planetenrundgang</div>
                  </Link>
                </div>
                <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                  <Link href="/astroprogramm" className="mobile-menu-item-container" onClick={toggleMenu}>
                    <div className="mobile-menu-item-text">Astroprogramm</div>
                  </Link>
                </div>
              </>
            )}
            {currSubMenu === "info" && (
              <>
                <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                  <a href="/anfahrt" className="mobile-menu-item-container" onClick={toggleMenu}>
                    <div className="mobile-menu-item-text">Anfahrt</div>
                  </a>
                </div>
                <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                  <a href="/lageplan" className="mobile-menu-item-container" onClick={toggleMenu}>
                    <div className="mobile-menu-item-text">Lageplan</div>
                  </a>
                </div>
                <div className={`mobile-menu-item ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                  <a href="/faq" className="mobile-menu-item-container">
                    <div className="mobile-menu-item-text">FAQ</div>
                  </a>
                </div>
                <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                  <a href="/kontakt" className="mobile-menu-item-container" onClick={toggleMenu}>
                    <div className="mobile-menu-item-text">Kontakt</div>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
