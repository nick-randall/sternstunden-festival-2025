import "../styles/collapsible-text.css";
import { FC } from "react";
import Spacer from "./Spacer";

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
        <Spacer width={30}/>
        <button className={`plus-minus-button ${isOpen ? "minus" : "plus"}`} style={{flexBasis: "10px"}} onClick={handleClick}>
          <span className={isOpen ? "minus" : "plus"}></span>
          <span className={isOpen ? "minus" : "plus"}></span>
        </button>
      </div>
      <div style={{ height: isOpen ? 10 : 0, transition: "0.3s ease-in-out" }}></div>
      <div className={`collapsible-text-box ${isOpen ? "open" : "closed"}`}>
        <div className="text-content">{text}</div>
      </div>
    </div>
  );
};

export default CollapsibleText;
