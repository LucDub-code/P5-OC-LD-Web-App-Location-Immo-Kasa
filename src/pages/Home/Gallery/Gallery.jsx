import "./Gallery.scss";
import Card from "./Card/Card";
import { useContext } from "react";
import { LogementsContext } from "../../../context/LogementsContext";

export default function Gallery() {
  const { logements } = useContext(LogementsContext);

  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          cover={logement.cover}
          title={logement.title}
          id={logement.id}
        />
      ))}
    </div>
  );
}
