"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ShrinkingMenuLogo from "./ShrinkingMenuLogo";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollIsAtTopOfPage, setScrollIsAtTopOfPage] = useState<boolean>(true);
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
  
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollIsAtTopOfPage(false);
      } else {
        setScrollIsAtTopOfPage(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(currSubMenu);

  return (
    <div
      className="menu-wrapper"
      style={{ background: scrollIsAtTopOfPage ? "linear-gradient(to right, rgb(253, 244, 219, 0.3), rgb(239, 132, 84, 0.3))" : "" }}
    >
      <div className="mobile-menu-bar">
        {
          // Add an invisible hamburger to the left,
          // ensuring the centered logo is correctly centered
          scrollIsAtTopOfPage && (
            <div className="menu-item-container">
              <div className="menu-item hamburger">
                <div className="hamburger-line invisible"></div>
              </div>
            </div>
          )
        }
        <ShrinkingMenuLogo scrollIsAtTopOfPage={scrollIsAtTopOfPage} />
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
              <div style= {{display:"flex", alignItems: "center"}}><img src="https://www.pinclipart.com/picdir/big/544-5440422_back-arrow-icon-transparent-png-clipart-free-download.png" alt="" style={{height: 30}}/></div>
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
  );
};

export default MobileMenu;
