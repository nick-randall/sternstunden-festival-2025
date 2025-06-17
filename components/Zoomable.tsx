"use client";
import { createPortal } from "react-dom";
import "../styles/common.css";
import { JSX, useEffect, useState } from "react";

interface ZoomableProps {
  children: JSX.Element;
}

const Zoomable: React.FC<ZoomableProps> = ({ children }) => {
  const [active, setActive] = useState(false);
  const [withAnimation, setWithAnimation] = useState("with-animation");

  const handleOpen = () => {
    setActive(true);
  };
  const handleClose = () => {
    setActive(false);
  };

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setWithAnimation("with-animation");
      });
    } else {
      setWithAnimation("");
    }
  }, [active]);

  if (!active) return <div onClick={handleOpen}>{children}</div>;
  if (typeof window === "undefined" || typeof document === "undefined") {
    return children;
  }
  return (
    <>
      {children}
      {createPortal(
        <div className="modal-container" onClick={handleClose}>
          <div className="modal-content">
            <div className={`modal-figure ${withAnimation}`}>
              <figure>
                {children}
                <figcaption>Zoomable Timetable</figcaption>
              </figure>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Zoomable;

// const Zoomable: FC<TimetableSwitcherProps> = ({ dayTimetables, dayNames }) => {
//   return (
//     <div className="modal-container">
//       <div className="modal-content">
//         <div className="modal-figure">
//           <figure>
//             <div className="tables-container" ref={tablesContainerRef}>
//               {dayTimetables.map((timetable, index) => (
//                 <div className={`individual-timetable-container ${index === selectedDayIndex ? "selected" : ""}`} key={index}>
//                   {timetable}
//                 </div>
//               ))}
//             </div>
//             <figcaption>Zoomable Timetable</figcaption>
//           </figure>
//         </div>
//       </div>
//     </div>
//   );
// };
