import "./Footer.scss";
import logoWhite from "../../assets/logos/kasa-logo-white.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img
          className="footer__logo"
          src={logoWhite}
          alt="Logo blanc de Kasa"
        />
        <p className="footer__copyright">© 2020 Kasa. All <br className="footer__break" />rights reserved</p>
      </div>
    </div>
  );
}
