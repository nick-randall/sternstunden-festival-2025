import "../styles/collapsible-text.css";
import { FC, JSX } from "react";

interface CollapsibleTextBoxProps {
  title: string;
  text: string | JSX.Element;
  isOpen: boolean;
  handleClick: () => void;
}

const CollapsibleTextBox: FC<CollapsibleTextBoxProps> = ({ title, text, isOpen, handleClick }) => {
  return (
    <div className="collapsible-text-component">
      <div className="title-box" onClick={handleClick}>
        <div>{title}</div>
        <div className={`plus-minus-icon ${isOpen ? "minus" : "plus"}`}>
          <span className={isOpen ? "minus" : "plus"}></span>
          <span className={isOpen ? "minus" : "plus"}></span>
        </div>
      </div>
      <div style={{ height: isOpen ? 10 : 0, transition: "0.3s" }}></div>
      <div className={`text-box ${isOpen ? "open" : "closed"}`}>
        <div className="text-content">{text}</div>
      </div>
    </div>
  );
};

export default CollapsibleTextBox;
