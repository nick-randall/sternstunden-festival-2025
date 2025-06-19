"use client";
import { createPortal } from "react-dom";
import "../styles/common.css";
import { cloneElement, JSX, useEffect, useState } from "react";

interface ZoomableProps {
  children: JSX.Element;
  title: string;
}

const Zoomable: React.FC<ZoomableProps> = ({ children, title }) => {
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

  if (!active) {
    const childWithOnClick = cloneElement(children, {
      onClick: handleOpen,
    });
    return <>{childWithOnClick}</>;
  }
  if (typeof window === "undefined" || typeof document === "undefined") {
    return children;
  }
  const childWithClickBarrier = cloneElement(children, {
    onClick: (e: React.MouseEvent) => e.stopPropagation(),
  });
  return (
    <>
      {children}
      {createPortal(
        <div className="modal-container" onClick={handleClose}>
          <div className="modal-content">
            <div className={`modal-figure ${withAnimation}`}>
              <figure>
                {childWithClickBarrier}
                <figcaption>{title}</figcaption>
              </figure>
              <button className="modal-close-button" onClick={handleClose}>
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Zoomable;
