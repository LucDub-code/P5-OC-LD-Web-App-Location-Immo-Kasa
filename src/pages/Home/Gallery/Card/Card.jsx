import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ cover, title, id }) {
  return (
    <Link to={`/logement/${id}`}>
      <div className="card">
        <img className="card__image" src={cover} alt={title} />
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
}
