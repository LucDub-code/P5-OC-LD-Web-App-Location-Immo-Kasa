import "./Header.scss";
import logo from "../../assets/logos/kasa-logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Logo de Kasa" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">Accueil</li>
          <li className="header__nav-item">A propos</li>
        </ul>
      </nav>
    </div>
  );
}
