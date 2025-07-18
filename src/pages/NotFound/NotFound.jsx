import "./NotFound.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">
        {<>Oups! La page que <br className="not-found__break" /> vous demandez n'existe pas.</>}
      </p>
      <Link to="/" className="not-found__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}