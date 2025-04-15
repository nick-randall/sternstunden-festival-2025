"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ShrinkingMenuLogo from "./ShrinkingMenuLogo";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollIsAtTopOfPage, setScrollIsAtTopOfPage] = useState<boolean>(true);
  const [currSubMenu, setCurrSubMenu] = useState<MenuItem>("");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (isOpen) {
      const menu = menuRef.current;
      if (menu) {
        // wait for end of animation
        const handleMenuClosed = () => {
          setCurrSubMenu("");
          menuRef.current?.removeEventListener("transitionend", handleMenuClosed);
        };
        menuRef.current?.addEventListener("transitionend", handleMenuClosed);
      }
    }

    setIsOpen(!isOpen);
  };

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
      <div className="mobile-menu" ref={menuRef} style={{ transform: currSubMenu === "programm" ? "translateX(-100%)" : "" }}>
        <div style={{ position: "relative" }}>
          <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
            <a href="/tickets" className="mobile-menu-item-container">
              <div className="mobile-menu-item-text">Tickets</div>
            </a>
          </div>
          <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
            <div className="mobile-menu-item-text" onClick={() => setCurrSubMenu("programm")}>
              Programm
            </div>
          </div>
          <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
            <Link href="/kuenstlerinnen" className="mobile-menu-item-container">
              <div className="mobile-menu-item-text">Künstler:innen</div>
            </Link>
          </div>
          <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
            <a href="/astroprogramm" className="mobile-menu-item-container">
              <div className="mobile-menu-item-text">Astroprogramm</div>
            </a>
          </div>
        </div>
        <div className="mobile-sub-menu">
          {currSubMenu === "programm" && (
            <>
              <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                <Link href="/timetable" className="mobile-menu-item-container">
                  <div className="mobile-menu-item-text">Timetable</div>
                </Link>
              </div>
              <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                <Link href="/kuenstlerinnen" className="mobile-menu-item-container">
                  <div className="mobile-menu-item-text">Künstler:innen</div>
                </Link>
              </div>
              <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                <Link href="/planeten" className="mobile-menu-item-container">
                  <div className="mobile-menu-item-text">Planetenrundgang</div>
                </Link>
              </div>
              <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
                <Link href="/astroprogramm" className="mobile-menu-item-container">
                  <div className="mobile-menu-item-text">Astroprogramm</div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
