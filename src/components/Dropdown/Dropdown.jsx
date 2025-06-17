import "./Dropdown.scss";
import { useState } from "react";
import chevron from "../../assets/icons/chevron.svg";

export default function Dropdown({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`dropdown ${className}`}>
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          className={`dropdown__icon ${isOpen ? "dropdown__icon--open" : ""}`}
          src={chevron}
          alt="chevron"
        />
      </button>
      <div
        className={`dropdown__content ${isOpen ? "dropdown__content--open" : ""}`}>
        {content}
      </div>
    </div>
  );
}
