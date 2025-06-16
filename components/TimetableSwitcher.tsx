"use client";
import { useState, JSX, FC, useRef } from "react";
import Spacer from "./Spacer";
import Image from "next/image";
import { createPortal } from "react-dom";

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

  return (
    <div>
      <Arrows scrollBackward={scrollBackward} scrollForward={scrollForward} />
      {dayNames.map((dayName, index) => (
        <button className={`day-name-button ${index === selectedDayIndex ? "selected" : ""}`} key={index} onClick={() => setSelectedDayIndex(index)}>
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
    </div>
  );
};

export default TimetableSwitcher;

const Arrows: FC<{ scrollForward: (ev: React.MouseEvent) => void; scrollBackward: (ev: React.MouseEvent) => void }> = ({
  scrollBackward,
  scrollForward,
}) => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }
  return createPortal(
    <div>
      <Image onClick={scrollBackward} src="./chevron-right.svg" alt="Rückwärts Scrollen" className="arrow arrow-left" height="50" width="50" />
      <Image onClick={scrollForward} src="./chevron-right.svg" alt="Vorwärts Scrollen" className="arrow" height="50" width="50" />
    </div>,
    document.body
  );
};
