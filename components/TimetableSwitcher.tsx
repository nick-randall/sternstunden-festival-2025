"use client";
import { useState, JSX, FC } from "react";
import Spacer from "./Spacer";

interface TimetableSwitcherProps {
  dayNames: string[];
  dayTimetables: JSX.Element[];
}

const TimetableSwitcher: FC<TimetableSwitcherProps> = ({ dayTimetables, dayNames }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  // const dayNameRefs = useRef<(HTMLButtonElement | null)[]>([]);
  // const handleRef = (index: number) => (el: HTMLButtonElement | null) => {
  //   dayNameRefs.current[index] = el;
  // };

  // useEffect(() => {});

  return (
    <div>
      {dayNames.map((dayName, index) => (
        <button
          className={`day-name-button ${index === selectedDayIndex ? "selected" : ""}`}
          key={index}
          // ref={handleRef(index)}
          onClick={() => setSelectedDayIndex(index)}
        >
          {dayName}
        </button>
      ))}
      <Spacer height={20} />
      <div className="tables-container">
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
