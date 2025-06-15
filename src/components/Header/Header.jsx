import "./Header.scss";
import logo from "../../assets/logos/kasa-logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Logo de Kasa" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <NavLink className="header__nav-link" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="header__nav-link" to="/about">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
