import "./DropdownAbout.scss";
import { useState } from "react";
import chevronUp from "../../../assets/icons/chevron-up.svg";
import chevronDown from "../../../assets/icons/chevron-down.svg";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <img
            className="dropdown__icon"
            src={chevronDown}
            alt="chevron down"
          />
        ) : (
          <img className="dropdown__icon" src={chevronUp} alt="chevron up" />
        )}
      </button>
      {isOpen && <div className="dropdown__content">{content}</div>}
    </div>
  );
}
