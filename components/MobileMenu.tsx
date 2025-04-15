"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ShrinkingMenuLogo from "./ShrinkingMenuLogo";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrollIsAtTopOfPage, setScrollIsAtTopOfPage] = useState<boolean>(true);

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
    <div className="menu-wrapper"       style={{ background: scrollIsAtTopOfPage ? "linear-gradient(to right, rgb(253, 244, 219, 0.3), rgb(239, 132, 84, 0.3))" : "" }}
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
        <div className="mobile-menu" onClick={toggleMenu}>
          <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
            <a href="/tickets" className="mobile-menu-item-container">
              <div className="mobile-menu-item-text">Tickets</div>
            </a>
          </div>
          <div className={`mobile-menu-item ${isOpen ? "open" : ""}`}>
            <a href="/programm" className="mobile-menu-item-container">
              <div className="mobile-menu-item-text">Programm</div>
            </a>
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
    </div>
  );
};

export default MobileMenu;
