"use client";
import { useState, JSX, FC, useRef, useEffect } from "react";
import Spacer from "./Spacer";
import Image from "next/image";
import { createPortal } from "react-dom";
import FestivalAppPopup from "./FestivalAppPopup";

interface TimetableSwitcherProps {
  dayNames: string[];
  dayTimetables: JSX.Element[];
}

const TimetableSwitcher: FC<TimetableSwitcherProps> = ({ dayTimetables, dayNames }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const tablesContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollForward = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    if (!tablesContainerRef.current) return;
    const container = tablesContainerRef.current;
    container.scrollTo({
      left: container.scrollLeft + container.clientWidth / 2,
      behavior: "smooth",
    });
  };
  const scrollBackward = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    if (!tablesContainerRef.current) return;
    const container = tablesContainerRef.current;
    container.scrollTo({
      left: container.scrollLeft - container.clientWidth / 2,
      behavior: "smooth",
    });
  };

  const handleDayChange = (index: number) => {
    setSelectedDayIndex(index);
    localStorage.setItem("selectedDayIndex", index.toString());
  };

  useEffect(() => {
    const lastSelectedIndex = localStorage.getItem("selectedDayIndex");
    if (lastSelectedIndex !== null) {
      setSelectedDayIndex(parseInt(lastSelectedIndex, 10));
    }
    const savedScrollPosition = localStorage.getItem("scrollPosition");
    const container = tablesContainerRef.current;
    if (savedScrollPosition && container) {
      const scrollPosition = parseInt(savedScrollPosition, 10);
      container.scrollTo({
        left: scrollPosition,
        behavior: "instant",
      });
    }
    const handleScroll = () => {
      if (tablesContainerRef.current) {
        localStorage.setItem("scrollPosition", tablesContainerRef.current.scrollLeft.toString());
      }
    };
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <Arrows scrollBackward={scrollBackward} scrollForward={scrollForward} />
      {dayNames.map((dayName, index) => (
        <button className={`day-name-button ${index === selectedDayIndex ? "selected" : ""}`} key={index} onClick={() => handleDayChange(index)}>
          {dayName}
        </button>
      ))}
      <Spacer height={20} />
      <div className="tables-container" ref={tablesContainerRef}>
        {dayTimetables.map((timetable, index) => (
          <div className={`individual-timetable-container ${index === selectedDayIndex ? "selected" : ""}`} key={index}>
            {timetable}
          </div>
        ))}
      </div>
      <FestivalAppPopup />
    </div>
  );
};

export default TimetableSwitcher;

const Arrows: FC<{ scrollForward: (ev: React.MouseEvent) => void; scrollBackward: (ev: React.MouseEvent) => void }> = ({
  scrollBackward,
  scrollForward,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null; // Don't render on the server or before mounting
  }
  return createPortal(
    <div>
      <Image onClick={scrollBackward} src="./chevron-right.svg" alt="Rückwärts Scrollen" className="arrow arrow-left" height="50" width="50" />
      <Image onClick={scrollForward} src="./chevron-right.svg" alt="Vorwärts Scrollen" className="arrow" height="50" width="50" />
    </div>,
    document.body
  );
};
