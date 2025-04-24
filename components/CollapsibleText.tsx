import "../styles/collapsible-text.css";
import { FC } from "react";

interface CollapsibleTextProps {
  title: string;
  text: string;
  isOpen: boolean;
  handleClick: () => void;
}

const CollapsibleText: FC<CollapsibleTextProps> = ({ title, text, isOpen, handleClick }) => {

  return (
    <div className="collapsible-text">
      <div className="title-box">
        <div>{title}</div>
        <button className={`plus-minus-button ${isOpen ? "minus": "plus"}`} onClick={handleClick}>
          <span className={isOpen ? "minus": "plus"}></span>
          <span className={isOpen ? "minus": "plus"} ></span>
        </button>
      </div>
      <div style={{ height: isOpen ? 10 : 0, transition: "0.3s ease" }}></div>
      <div className={`collapsible-text-box ${isOpen ? "open" : "closed"}`}>{text}</div>
    </div>
  );
};

export default CollapsibleText;
