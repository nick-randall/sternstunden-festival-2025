"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import ShrinkingMenuLogo from "./ShrinkingMenuLogo";
import Link from "next/link";
import "../styles/menu.css";

const Menu: React.FC = () => {
  const [currDropdown, setCurrDropdown] = useState<string>("");
  const [left, setLeft] = useState<number>(0);

  const [scrollIsAtTopOfPage, setScrollIsAtTopOfPage] = useState<boolean>(false);

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
    <div
      className="menu-wrapper"
      style={{ background: scrollIsAtTopOfPage ? "linear-gradient(to right, rgb(253, 244, 219, 0.3), rgb(239, 132, 84, 0.3))" : "" }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu-bar">
        <div className="menu-items-wrapper">
          {/* <div className="menu-items-wrapper" style={{ alignItems: scrollIsAtTopOfPage ? "center" : "end" }}> */}

          <a href="/tickets" className="menu-item-container">
            <div className={`menu-item ${currDropdown === "tickets" && "hovered"}`} onMouseEnter={() => handleMouseEnter("tickets")}>
              Tickets
            </div>
          </a>
          <div className="menu-item-container" onMouseEnter={() => handleMouseEnter("programm")}>
            <div className={`menu-item ${currDropdown === "programm" && "hovered"}`} ref={programHoverRef}>
              Programm
            </div>
          </div>
          <ShrinkingMenuLogo scrollIsAtTopOfPage={scrollIsAtTopOfPage} />
          <div className="menu-item-container" onMouseEnter={() => handleMouseEnter("info")}>
            <div className={`menu-item ${currDropdown === "info" && "hovered"}`} ref={infoHoverRef}>
              Info
            </div>
          </div>
          <div className="menu-item-container" onMouseEnter={() => handleMouseEnter("kontakt")}>
            <div className={`menu-item ${currDropdown === "kontakt" && "hovered"}`} ref={kontaktHoverRef}>
              Kontakt
            </div>
          </div>
        </div>
      </div>
      <div className={`menu-dropdown ${currDropdown === "" && "hidden"}`}>
        <div style={{ left, position: "relative", top: "100%" }}>
          {currDropdown === "programm" && (
            <ul className="menu-dropdown-list">
              <li>
                <a href="/timetable" className="menu-dropdown-link">
                  Timetable
                </a>
              </li>
              <li>
                <Link href="/kuenstlerinnen" className="menu-dropdown-link">
                  Artists
                </Link>
              </li>
              <li>
                <a href="/astroprogramm" className="menu-dropdown-link">
                  Astroprogramm
                </a>
              </li>
              <li>
                <Link href="/planeten" className="menu-dropdown-link">
                  Planetenrundgang
                </Link>
              </li>
            </ul>
          )}

          {currDropdown === "info" && (
            <ul className="menu-dropdown-list">
              <li>
                <a href="/anfahrt" className="menu-dropdown-link">
                  Anfahrt
                </a>
              </li>
              <li>
                <a href="/lageplan" className="menu-dropdown-link">
                  Lageplan
                </a>
              </li>
              <li>
                <a href="/faqs" className="menu-dropdown-link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/mission-statement" className="menu-dropdown-link">
                  Mission Statement
                </a>
              </li>
              <li>
                <a href="/sternwarte" className="menu-dropdown-link">
                  Sternwarte
                </a>
              </li>
              <li>
                <a href="/rueckblick" className="menu-dropdown-link">
                  Rückblick 23/24
                </a>
              </li>
            </ul>
          )}
          {currDropdown === "kontakt" && (
            <ul className="menu-dropdown-list">
              <li>
                <a href="/kontakt" className="menu-dropdown-link">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/support-us" className="menu-dropdown-link">
                  Support us!
                </a>
              </li>
              <li>
                <a href="/impressum" className="menu-dropdown-link">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/agb" className="menu-dropdown-link">
                  AGB
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="menu-dropdown-link">
                  Datenschutz
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
