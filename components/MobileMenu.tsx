"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import Spacer from "./Spacer";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (isOpen) {
      const menu = menuRef.current;
      if (menu) {
        // wait for end of animation, then close sub-menu
        const handleMenuClosed = () => {
          // setCurrSubMenu("");
          menuRef.current?.removeEventListener("transitionend", handleMenuClosed);
        };
        menuRef.current?.addEventListener("transitionend", handleMenuClosed);
      }
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`menu-wrapper mobile ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-bar">
          <Link href="/" className="menu-item-container" onClick={() => setIsOpen(false)}>
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
        <div className={`mobile-menu ${isOpen ? "open" : ""}`} ref={menuRef}>
          <div className={`mobile-menu-item tickets`}>
            <Link href="/tickets" className="mobile-menu-item-container" onClick={toggleMenu}>
              <div className="mobile-menu-item-text">Tickets</div>
            </Link>
          </div>
          <div className={`mobile-menu-item`}>
            <Link href="/timetable" className="mobile-menu-item-container" onClick={toggleMenu}>
              <div className="mobile-menu-item-text">Programm</div>
            </Link>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/kuenstlerinnen" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Künstler:innen</div>
              </Link>
            </div>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/planeten" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Planetenrundgang</div>
              </Link>
            </div>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/astroprogramm" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Astroprogramm</div>
              </Link>
            </div>
          </div>
          <div className={`mobile-menu-item`}>
            <Link href="/info" className="mobile-menu-item-container" onClick={toggleMenu}>
              <div className="mobile-menu-item-text">Info</div>
            </Link>

            <div className={`mobile-sub-menu-item`}>
              <Link href="/anfahrt" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Anfahrt</div>
              </Link>
            </div>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/lageplan" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Lageplan</div>
              </Link>
            </div>
            <div className={`mobile-sub-menu-item`} onClick={toggleMenu}>
              <Link href="/faq" className="mobile-menu-item-container">
                <div className="mobile-menu-item-text">FAQ</div>
              </Link>
            </div>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/kontakt" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Kontakt</div>
              </Link>
            </div>
          </div>
          <div className={`mobile-menu-item`}>
            <Link href="/kontakt" className="mobile-menu-item-container" onClick={toggleMenu}>
              <div className="mobile-menu-item-text">Kontakt</div>
            </Link>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/support-us" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Support Us!</div>
              </Link>
            </div>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/impressum" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Impressum</div>
              </Link>
            </div>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/datenschutz" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">Datenschutz</div>
              </Link>
            </div>
            <div className={`mobile-sub-menu-item`}>
              <Link href="/agb" className="mobile-menu-item-container" onClick={toggleMenu}>
                <div className="mobile-menu-item-text">AGB</div>
              </Link>
            </div>
          </div>
          <Spacer height={200} />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
