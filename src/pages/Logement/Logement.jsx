import "./Logement.scss";
import { useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { LogementsContext } from "../../context/LogementsContext";
import NotFound from "../NotFound/NotFound";
import StarActive from "../../assets/icons/star-active.svg";
import StarInactive from "../../assets/icons/star-inactive.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import Carrousel from "./Carrousel,jsx/Carrousel";

export default function Logement() {
  const { id } = useParams();
  const { logements } = useContext(LogementsContext);

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  const rating = parseInt(logement.rating);
  const totalStars = 5;

  return (
    <div className="logement">
      <Carrousel images={logement.pictures} />
      <div className="logement__summary">
        <div className="logement__infos">
          <h2 className="logement__infos__title">{logement.title}</h2>
          <p className="logement__infos__location">{logement.location}</p>
          <div className="logement__infos__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="logement__infos__tags__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logement__host-rating">
          <div className="logement__host">
            <p className="logement__host__name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement__host__picture"
            />
          </div>
          <div className="logement__rating">
            {[...Array(totalStars)].map((_, i) => (
              <img
                key={i}
                src={i < rating ? StarActive : StarInactive}
                alt={i < rating ? StarActive : StarInactive}
                className="logement__rating__star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="logement__dropdowns">
        <Dropdown
          className="logement__dropdown"
          title="Description"
          content={logement.description}
        />
        <Dropdown
          className="logement__dropdown"
          title="Équipements"
          content={
            <ul className="logement__equipments">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
