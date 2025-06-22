"use client";
import { useState, JSX, FC, useRef, useEffect } from "react";
import Spacer from "./Spacer";
import Image from "next/image";
import { createPortal } from "react-dom";
import useMediaQuery from "./useMediaQuery";

interface TimetableSwitcherProps {
  dayNames: string[];
  dayTimetables: JSX.Element[];
}

const TimetableSwitcher: FC<TimetableSwitcherProps> = ({ dayTimetables, dayNames }) => {
  if (dayTimetables.length !== dayNames.length) {
    throw new Error("dayTimetables and dayNames must have the same length");
  }
  const { screenWidth } = useMediaQuery();

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

  if (screenWidth < 768) {
    return <ClickToZoom dayTimetables={dayTimetables} dayNames={dayNames} />;
  }
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

const ClickToZoom: FC<TimetableSwitcherProps> = ({ dayTimetables, dayNames }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const slotRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(0);
  const [showZoomed, setShowZoomed] = useState(false);
  const handleClick = () => {
    setShowZoomed(true);
  };
  const handleClose = () => {
    setShowZoomed(false);
  };
  const offscreenTablesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (offscreenTablesContainerRef.current && slotRef.current) {
      const slotRect = slotRef.current.getBoundingClientRect();
      const offscreenRect = offscreenTablesContainerRef.current.getBoundingClientRect();
      const scaleX = slotRect.width / offscreenRect.width;
      setScale(scaleX);
    }
  }, []);

  return (
    <div>
      <Zoomable active={showZoomed} dayTimetable={dayTimetables[selectedDayIndex]} handleClose={handleClose} scale={scale} />
      {dayNames.map((dayName, index) => (
        <button className={`day-name-button ${index === selectedDayIndex ? "selected" : ""}`} key={index} onClick={() => setSelectedDayIndex(index)}>
          {dayName}
        </button>
      ))}
      <div className="scaled-tables-container" style={{ transform: `scale(${scale})`, transformOrigin: "top left" }} onClick={handleClick}>
        {dayTimetables.map((timetable, index) => (
          <div className={`individual-timetable-container ${index === selectedDayIndex ? "selected" : ""}`} key={index}>
            {timetable}
          </div>
        ))}
      </div>
      <div ref={slotRef} />
      <div className="offscreen-tables-container" ref={offscreenTablesContainerRef}>
        <div className={`individual-timetable-container selected`}>{dayTimetables[1] /*I'm cheating because I know the second one is wider*/}</div>
      </div>
    </div>
  );
};

interface ZoomableProps {
  active: boolean;
  handleClose: () => void;
  dayTimetable: JSX.Element;
  scale?: number;
  // dayName: string;
}

const Zoomable: FC<ZoomableProps> = ({ active, handleClose, dayTimetable, scale }) => {
  const [withAnimation, setWithAnimation] = useState("with-animation");
  useEffect(() => {
    if (active) {
      setWithAnimation("with-animation");
    } else {
      setWithAnimation("");
    }
  }, [active]);

  if (!active) return null;
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }
  return createPortal(
    <div className="modal-container" onClick={handleClose}>
      <div className="modal-content">
        <div className={`modal-figure ${withAnimation}`}>
          <figure>
            <div className="scaled-tables-container" style={{ transform: `scale(${scale})`, transformOrigin: "top left", backgroundColor: "white" }}>
              <div className={`individual-timetable-container selected`}>{dayTimetable}</div>
            </div>
            <figcaption>Zoomable Timetable</figcaption>
          </figure>
        </div>
      </div>
    </div>,
    document.body
  );
};
