"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import ShrinkingMenuLogo from "./ShrinkingMenuLogo";
import Link from "next/link";
import "../styles/menu.css";

const DesktopMenu: React.FC = () => {
  const [currDropdown, setCurrDropdown] = useState<string>("");
  const [left, setLeft] = useState<number>(0);

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

  const programHoverRef = useRef<HTMLDivElement>(null);
  const infoHoverRef = useRef<HTMLDivElement>(null);
  const kontaktHoverRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (name: string) => {
    setCurrDropdown(name);
    if (name === "tickets") return;
    const refs: { [name: string]: RefObject<HTMLDivElement | null> } = {
      programm: programHoverRef,
      info: infoHoverRef,
      kontakt: kontaktHoverRef,
    };
    const item = refs[name].current;
    if (!item) return;

    const { left } = item.getBoundingClientRect();
    setLeft(left);
  };

  const handleMouseLeave = () => {
    setCurrDropdown("");
  };

  return (
    <nav
      className="menu-wrapper"
      style={{ background: scrollIsAtTopOfPage ? "linear-gradient(to right, rgb(253, 244, 219, 0.3), rgb(239, 132, 84, 0.3))" : "" }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu-bar">
        <div className="menu-items-wrapper">

          <Link href="/tickets" className="menu-item-container">
            <div className={`menu-item ${currDropdown === "tickets" && "hovered"}`} onMouseEnter={() => handleMouseEnter("tickets")}>
              Tickets
            </div>
          </Link>
          <Link href="/programm" className="menu-item-container" onMouseEnter={() => handleMouseEnter("programm")}>
            <div className={`menu-item ${currDropdown === "programm" && "hovered"}`} ref={programHoverRef}>
              Programm
            </div>
          </Link>
          <ShrinkingMenuLogo scrollIsAtTopOfPage={scrollIsAtTopOfPage} />
          <Link href="/info" className="menu-item-container" onMouseEnter={() => handleMouseEnter("info")}>
            <div className={`menu-item ${currDropdown === "info" && "hovered"}`} ref={infoHoverRef}>
               Info
            </div>
          </Link>
          <Link href="/kontakt" className="menu-item-container" onMouseEnter={() => handleMouseEnter("kontakt")}>
            <div className={`menu-item ${currDropdown === "kontakt" && "hovered"}`} ref={kontaktHoverRef}>
              Kontakt
            </div>
          </Link>
        </div>
      </div>
      <div className={`menu-dropdown ${currDropdown === "" && "hidden"}`}>
        <div style={{ left, position: "relative", top: "100%" }}>
          {/* {currDropdown === "programm" && (
            <ul className="menu-dropdown-list">
              <li>
                <Link href="/timetable" className="menu-dropdown-link">
                  Timetable
                </Link>
              </li>
              <li>
                <Link href="/kuenstlerinnen" className="menu-dropdown-link">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/astroprogramm" className="menu-dropdown-link">
                  Astroprogramm
                </Link>
              </li>
              <li>
                <Link href="/planeten" className="menu-dropdown-link">
                  Planetenrundgang
                </Link>
              </li>
            </ul>
          )} */}

          {currDropdown === "info" && (
            <ul className="menu-dropdown-list">
              {/* <li>
                <Link href="/info" className="menu-dropdown-link">
                  Info
                </Link>
              </li> */}
              <li>
                <Link href="/anfahrt" className="menu-dropdown-link">
                  Anfahrt
                </Link>
              </li>
              {/* <li>
                <Link href="/lageplan" className="menu-dropdown-link">
                  Lageplan
                </Link>
              </li> */}
              <li>
                <Link href="/faqs" className="menu-dropdown-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/mission-statement" className="menu-dropdown-link">
                  Mission Statement
                </Link>
              </li>
              <li>
                <Link href="/sternwarte" className="menu-dropdown-link">
                  Sternwarte
                </Link>
              </li>
              <li>
                <Link href="/rueckblick" className="menu-dropdown-link">
                  Rückblick 23/24
                </Link>
              </li>
            </ul>
          )}
          {currDropdown === "kontakt" && (
            <ul className="menu-dropdown-list">
              {/* <li>
                <Link href="/kontakt" className="menu-dropdown-link">
                  Kontakt
                </Link>
              </li> */}
              <li>
                <Link href="/support-us" className="menu-dropdown-link">
                  Support us!
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="menu-dropdown-link">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/agb" className="menu-dropdown-link">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="menu-dropdown-link">
                  Datenschutz
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
